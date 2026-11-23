import { blankAssessment, conditionalElements, controlsInScope, residualItems, applicableRisks, SYSTEM_FIELDS, type Assessment } from 'arc-core';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { App } from '../src/App';
import { REGISTER as reg } from '../src/register';
import { useStore } from '../src/store';

const go = async (hash: string) => {
  await act(async () => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
};

beforeEach(() => {
  localStorage.clear();
  useStore.setState({ a: null, unsaved: false, mode: 'assess', me: { name: '', role: '' } });
  window.location.hash = '';
});
afterEach(cleanup);

describe('ARCvisor', () => {
  it('opens the sample and shows the overview', async () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Assess an agentic AI system/ })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Try the sample/ }));
    await screen.findByRole('heading', { name: 'Overview' });
    expect(screen.getByText(/contradicted by the code/)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Next to do' })).toBeTruthy();
    expect(screen.getByText(/Register .* adds/)).toBeTruthy();
  });

  it('accepting a risk suggestion scores the risk', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Try the sample/ }));
    await go('#/risks/RISK-047');
    const detail = await screen.findByRole('article');
    expect(within(detail).getByText(/Unscored, counts as priority/)).toBeTruthy();
    fireEvent.click(within(detail).getByRole('button', { name: 'Accept' }));
    await waitFor(() => expect(within(screen.getByRole('article')).getByText('Priority')).toBeTruthy());
    expect(useStore.getState().a!.prov['risk.RISK-047']).toBe('confirmed');
    expect(within(screen.getByRole('article')).getByText(/Suggestion accepted/)).toBeTruthy();
  });

  it('shows the code that contradicts a Level 0 entry, and lets a reviewer accept the explanation', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Try the sample/ }));
    await go('#/controls/CTRL-0089');
    const detail = await screen.findByRole('article');
    expect(within(detail).getByText('The code contradicts this entry.')).toBeTruthy();
    expect(within(detail).getByText('infra/egress-allowlist.yaml')).toBeTruthy();
    expect(within(detail).queryByRole('radio', { name: 'Not adopted' })).toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Review' }));
    fireEvent.change(within(detail).getByLabelText(/Accept the explanation/), { target: { value: 'Egress is enforced by the agency proxy outside this repository.' } });
    fireEvent.click(within(detail).getByRole('button', { name: 'Accept the explanation' }));
    await waitFor(() => expect(within(screen.getByRole('article')).getByText(/accepted the explanation/)).toBeTruthy());
    expect(useStore.getState().a!.controls['CTRL-0089'].contradictionAccepted?.reason).toMatch(/agency proxy/);
  });

  it('blocks sign-off while anything is outstanding', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Try the sample/ }));
    await go('#/review');
    await screen.findByRole('heading', { name: 'Sign-off and review' });
    expect(screen.getByRole('heading', { name: 'Before this can be signed' })).toBeTruthy();
    expect((screen.getByRole('button', { name: /Sign off revision 2/ }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByRole('heading', { name: /Changes since revision 1/ })).toBeTruthy();
  });

  it('signs a complete assessment and starts the next revision', async () => {
    useStore.getState().open(complete());
    render(<App />);
    await go('#/review');
    await screen.findByRole('heading', { name: 'Sign-off and review' });
    fireEvent.click(screen.getByRole('button', { name: 'Sign off revision 1' }));
    fireEvent.click(await screen.findByRole('button', { name: 'Sign off' }));
    await screen.findByRole('button', { name: 'Start revision 2' });
    expect(useStore.getState().a!.signoff.signedAt).toBeTruthy();
    expect(useStore.getState().a!.basis?.version).toBe(reg.version.version);
    fireEvent.click(screen.getByRole('button', { name: 'Start revision 2' }));
    await waitFor(() => expect(useStore.getState().a!.revision).toBe(2));
    expect(useStore.getState().a!.signoff.signedAt).toBeUndefined();
  });

  it('shows the combination rules and the components, and authority changes which risks apply', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Try the sample/ }));
    await go('#/capabilities');
    await screen.findByRole('heading', { name: 'Capabilities and components' });
    expect(screen.getByRole('heading', { name: 'Lethal trifecta' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Components only some systems have' })).toBeTruthy();
    const risk = Object.keys(reg.risks).find((r) => reg.risks[r].min_authority && !reg.risks[r].superseded_by)!;
    const [cap, needs] = Object.entries(reg.risks[risk].min_authority!)[0];
    const lowest = reg.capabilities[cap].authority![0];
    act(() => useStore.getState().edit((x) => { x.caps[cap] = { ...x.caps[cap], present: 'yes', authority: needs }; }));
    expect(applicableRisks(reg, useStore.getState().a!)).toContain(risk);
    if (lowest !== needs) {
      fireEvent.change(screen.getByLabelText(/Authority: how far it acts on its own/, { selector: `#au-${cap}` }), { target: { value: lowest } });
      await waitFor(() => expect(applicableRisks(reg, useStore.getState().a!)).not.toContain(risk));
    }
  });

  it('waives a Level 0 control only with what is absent and the evidence', async () => {
    const a = complete();
    const l0 = controlsInScope(reg, a).find((c) => c.level === 0)!;
    delete a.controls[l0.id];
    useStore.getState().open(a);
    render(<App />);
    await go(`#/controls/${l0.id}`);
    const detail = await screen.findByRole('article');
    expect(within(detail).queryByRole('radio', { name: 'Adapted' })).toBeNull();
    fireEvent.click(within(detail).getByRole('radio', { name: 'Waived: not present' }));
    fireEvent.change(within(detail).getByLabelText(/What it concerns that is not present/), { target: { value: 'The system runs no code the agent generates' } });
    expect(useStore.getState().a!.controls[l0.id].status).toBe('waived');
    await go('#/review');
    expect((await screen.findByRole('button', { name: /Sign off revision 1/ }) as HTMLButtonElement).disabled).toBe(true);
    await go(`#/controls/${l0.id}`);
    fireEvent.change(within(await screen.findByRole('article')).getByLabelText(/Evidence that it is absent/), { target: { value: 'No code-execution tool in agent/tools/' } });
    await go('#/review');
    await waitFor(() => expect((screen.getByRole('button', { name: /Sign off revision 1/ }) as HTMLButtonElement).disabled).toBe(false));
    expect(screen.getByRole('heading', { name: 'Level 0 controls waived' })).toBeTruthy();
  });

  it('keeps the assessment in the browser across reloads', async () => {
    const { unmount } = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Try the sample/ }));
    await screen.findByRole('heading', { name: 'Overview' });
    unmount();
    expect(JSON.parse(localStorage.getItem('arcvisor:assessment:v1')!).system.name).toBe('GrantDesk assistant');
  });
});

function complete(): Assessment {
  const a = blankAssessment();
  for (const c of Object.keys(reg.capabilities)) a.caps[c] = { present: c === 'CAP-03' ? 'yes' : 'no' };
  for (const c of conditionalElements(reg)) a.components[c] = { present: 'no', reason: 'Not in this system' };
  for (const f of SYSTEM_FIELDS) a.system[f.key] = f.options ? f.options[0] : `${f.label} of the test system`;
  for (const r of applicableRisks(reg, a)) a.risks[r] = { context: 'How it arises', impact: 3, likelihood: 3 };
  for (const c of controlsInScope(reg, a)) if (c.group !== 'optional') a.controls[c.id] = { status: 'as-is', how: 'Implemented', evidence: 'config.yaml', owner: 'Team' };
  for (const i of residualItems(reg, a)) a.residual[i.rid] = { scenario: 'What remains', strategy: 'monitor', acceptedBy: 'Director' };
  a.signoff = { assessor: 'Engineer', reviewer: 'Governance lead', authority: 'Director', decision: 'Approve' };
  return a;
}

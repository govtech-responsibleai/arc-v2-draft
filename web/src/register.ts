// The ARC register, read from the YAML in arc-risk-register/ at build time and parsed in the browser by arc-core.
import { loadRegisterFromFiles, type Register } from 'arc-core';
import capabilities from '../../arc-risk-register/capabilities.yaml?raw';
import combinations from '../../arc-risk-register/combinations.yaml?raw';
import components from '../../arc-risk-register/components.yaml?raw';
import controls from '../../arc-risk-register/controls.yaml?raw';
import crosswalk_references from '../../arc-risk-register/crosswalk_references.yaml?raw';
import design from '../../arc-risk-register/design.yaml?raw';
import hazards from '../../arc-risk-register/hazards.yaml?raw';
import register from '../../arc-risk-register/register.yaml?raw';
import risks from '../../arc-risk-register/risks.yaml?raw';

export const REGISTER: Register = loadRegisterFromFiles({
  register, capabilities, components, design, risks, controls, hazards, crosswalk_references, combinations,
});

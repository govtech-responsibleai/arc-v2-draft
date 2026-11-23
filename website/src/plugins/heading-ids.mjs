// Give every heading the id it had on the MkDocs site, so existing links keep working.
// An explicit `{ #id }` at the end of a heading wins; otherwise use Python-Markdown's slug,
// with `_1`, `_2`... for repeats. A Sätteri mdast plugin, created once per page.
const ATTR = /\s*\{\s*#([^\s}]+)\s*\}\s*$/;
const toText = (node) => (typeof node.value === 'string' ? node.value : (node.children || []).map(toText).join(''));
const slugify = (text) =>
  text.normalize('NFKD').replace(/[^\x00-\x7F]/g, '').replace(/[^\w\s-]/g, '').trim().toLowerCase().replace(/[-\s]+/g, '-');

export default function headingIds() {
  const seen = new Set();
  return {
    name: 'arc-heading-ids',
    heading(node) {
      const children = [...node.children];
      const last = children[children.length - 1];
      let id;
      if (last && last.type === 'text' && ATTR.test(last.value)) {
        id = last.value.match(ATTR)[1];
        const rest = last.value.replace(ATTR, '');
        children.splice(-1, 1, ...(rest ? [{ type: 'text', value: rest }] : []));
      }
      id ||= slugify(children.map(toText).join(''));
      let unique = id;
      for (let n = 1; seen.has(unique); n++) unique = `${id}_${n}`;
      seen.add(unique);
      return { type: 'heading', depth: node.depth, data: { hProperties: { id: unique } }, children };
    },
  };
}

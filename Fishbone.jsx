
export default function Fishbone({ state, headSide='right' }) {
  // Right-facing spine + boxed effect at head (conventional layout)  [ASQ, Wikipedia]
  const spineStartX = headSide==='right' ? margin : W - margin*1.5;
  const spineEndX   = headSide==='right' ? W - margin*1.5 : margin;

  // Bone spacing scales with density (many causes => longer bones & wider category spacing)
  // Causes use monotonic outward offsets, rotation (±20°), and word-wrap to reduce footprint.
}

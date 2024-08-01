// Function to interpolate between two colors based on a fraction (0 to 1)
export const interpolateColor = (color1: string, color2: string, factor: number) => {
  const [r1, g1, b1] = color1.match(/\w\w/g)!.map(x => parseInt(x, 16));
  const [r2, g2, b2] = color2.match(/\w\w/g)!.map(x => parseInt(x, 16));

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `rgb(${r}, ${g}, ${b})`;
};
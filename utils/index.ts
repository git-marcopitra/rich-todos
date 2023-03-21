export const camelize = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

export const generateColor = (
  opacity = 0.5
): `rgb(${number} ${number} ${number} / ${number})` =>
  `rgb(${Math.random() * 255} ${Math.random() * 255} ${
    Math.random() * 255
  } / ${opacity})`;

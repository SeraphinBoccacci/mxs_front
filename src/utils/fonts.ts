export const formatGoogleFontsUrl = (fonts: string[]): string | null => {
  if (!fonts?.length) return null;

  const queryString = fonts.reduce(
    (acc, font) => `family=${font.split(" ").join("+")}&${acc}`,
    "display=swap"
  );

  return `https://fonts.googleapis.com/css2?${queryString}`;
};

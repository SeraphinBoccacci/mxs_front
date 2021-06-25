export const removeFirstAndLastLines = (textblock: string) => {
  const lines = textblock.split("\n");
  // remove one line, starting at the first position
  const targetLines = lines.slice(1, lines.length - 1);
  // join the array back into a single string
  return targetLines.join("\n");
};

// String.replaceAll seems not to be handled on windows OBS browser source
export const replaceAll = (
  string: string,
  search: string,
  replace: string
): string => {
  return string.split(search).join(replace);
};

export const replaceManyAll = (
  string: string,
  replacements: [string, string][]
): string => {
  return replacements.reduce(
    (formattedString: string, replacement: [string, string]) => {
      const [search, replace] = replacement;
      return replaceAll(formattedString, search, replace);
    },
    string
  );
};

export const removeFirstAndLastLines = (textblock: string) => {
  const lines = textblock.split("\n");
  // remove one line, starting at the first position
  const targetLines = lines.slice(1, lines.length - 1);
  // join the array back into a single string
  return targetLines.join("\n");
};

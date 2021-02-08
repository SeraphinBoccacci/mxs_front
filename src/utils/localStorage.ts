export const getItem = (key: string) => {
  const item = window.localStorage.getItem(key);

  if (!item) throw new Error(key);

  return JSON.parse(item);
};

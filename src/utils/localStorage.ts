export const getItem = (key: string) => {
  const item = window.localStorage.getItem(key);

  if (!item) return null;

  return JSON.parse(item);
};

export const setItem = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

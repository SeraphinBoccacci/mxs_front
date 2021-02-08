import queryString from "query-string";

export const getFromQueryParams = (key: string): string | string[] | null => {
  const search = window.location.search;

  const parsedSearch = queryString.parse(search);

  return parsedSearch[key] || null;
};

export const setOnQueryParams = (key: string, value: string): void => {
  const search = window.location.search;

  const parsedSearch = queryString.parse(search);

  window.location.search = queryString.stringify({
    ...parsedSearch,
    [key]: value,
  });
};

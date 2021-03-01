import queryString from "query-string";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useQueryString = (key: string): [any, (value: any) => void] => {
  const history = useHistory();
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const parsedSearch = queryString.parse(history.location.search);
      const item = parsedSearch[key];

      if (item === "true") return true;
      if (item === "false") return false;

      return item || null;
    } catch (error) {
      return null;
    }
  });

  const setValue = (value: any) => {
    try {
      const parsedSearch = queryString.parse(history.location.search);
      const { [key]: lastValue, ...restParsedSearch } = parsedSearch;
      history.push({
        search: queryString.stringify({
          ...restParsedSearch,
          ...(!!value && { [key]: value }),
        }),
      });

      setStoredValue(value);
    } catch (error) {}
  };

  return [storedValue, setValue];
};

import { useState } from "react";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

export const useQueryString = (key: string): [any, (value: any) => void] => {
  const history = useHistory();
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const parsedSearch = queryString.parse(history.location.search);
      const item = parsedSearch[key];

      return item || null;
    } catch (error) {
      return null;
    }
  });

  const setValue = (value: any) => {
    try {
      const parsedSearch = queryString.parse(history.location.search);
      history.push({
        search: queryString.stringify({
          ...parsedSearch,
          [key]: value,
        }),
      });

      setStoredValue(value);
    } catch (error) {}
  };

  return [storedValue, setValue];
};

import { useCallback } from "react";
import { useHistory } from "react-router";

interface History {
  location: { pathname: string };
  push: (path: string) => void;
}

export const useHistoryWithQueryString = (): [
  (path: string) => void,
  History
] => {
  const history = useHistory();

  const pushToHistory = useCallback(
    (path: string) => {
      history.push(`${path}${history.location.search}`);
    },
    [history]
  );

  return [pushToHistory, history];
};

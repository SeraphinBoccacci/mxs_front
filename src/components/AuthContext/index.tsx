import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";
import { useHistory } from "react-router";

import routes from "../../constants/routes";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useQueryString } from "../../hooks/useQueryString";
import { getUserData } from "../../services/user";
import { UserType } from "../../types/user";
import { ErrorHandlingContext } from "../ErrorHandlingContext";

export enum UserAccountStatus {
  PENDING_VERIFICATION = 0,
  VERIFIED,
  PENDING_EDIT_PASSWORD_VERIFICATION,
}

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  herotag?: string;
  setTokenData: (
    s: { token: string; expirationTimestamp: number } | null
  ) => void;
  setHerotag: (herotag: string) => void;
  user?: UserType;
  getUser: () => void;
}>({
  isAuthenticated: false,
  setTokenData: () => {},
  setHerotag: () => {},
  getUser: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [tokenData, setTokenData] = useLocalStorage("tokenData", null);

  const [queryStringHerotag, setQueryStringHerotag] = useQueryString("herotag");
  const [herotag, setStateHerotag] = useState(queryStringHerotag);

  const { handleError } = useContext(ErrorHandlingContext);

  const setHerotag = useCallback(
    (herotag: string) => {
      setQueryStringHerotag(herotag);
      setStateHerotag(herotag);
    },
    [setQueryStringHerotag, setStateHerotag]
  );

  const history = useHistory();

  const isAuthenticated = !!tokenData;

  const getUser = useCallback(async () => {
    try {
      const data = await getUserData();
      setUser(data);
      setHerotag(data.herotag);
    } catch (error) {
      setTokenData(null);
      history.push(routes.home);
      handleError(error?.message);
    }
  }, [handleError, history, setHerotag, setTokenData]);

  useEffect(() => {
    if (!tokenData?.token || Date.now() > tokenData.expirationTimestamp) {
      setTokenData(null);
    }
  }, [setTokenData, tokenData, history]);

  useEffect(() => {
    if (isAuthenticated) getUser();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setTokenData,
        setHerotag,
        herotag,
        user,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getUserData } from "../../services/user";
import ModalConnect from "./ModalConnect";
import queryString from "query-string";

export enum UserAccountStatus {
  PENDING,
  VERIFIED,
}

export interface IftttIntegrationData {
  eventName: string;
  triggerKey: string;
  isActive: boolean;
}

export interface UserType {
  _id?: string;
  name?: string;
  password?: string;
  herotag?: string;
  erdAddress?: string;
  status: UserAccountStatus;
  verificationReference?: string;
  integrations?: {
    ifttt?: IftttIntegrationData;
  };
  isStreaming: boolean;
  streamingStartDate: Date;
}

export const AuthContext = createContext<{
  isUserConnected: boolean;
  herotag?: string;
  setToken: (s: any) => void;
  setHerotag: (s: any) => void;
  setIsModalOpenned: (s: boolean) => void;
  setTokenExpirationTimestamp: (s: number | null) => void;
  user?: UserType;
  tokenExpirationTimestamp?: number;
  isConnectModalOpenned?: boolean;
  isOnPendingVerificationScreen?: boolean;
  setIsOnPendingVerificationScreen?: (s: boolean) => void;
}>({
  isUserConnected: false,
  setToken: (s: any) => {},
  setHerotag: (s: any) => {},
  setTokenExpirationTimestamp: (s: number | null) => {},
  setIsModalOpenned: (s) => s,
  setIsOnPendingVerificationScreen: (s: boolean) => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();
  const parsedSearch = queryString.parse(history.location.search);

  const [token, setToken] = useLocalStorage("token", null);
  const [herotag, setHerotag] = useLocalStorage("herotag", null);
  const [
    tokenExpirationTimestamp,
    setTokenExpirationTimestamp,
  ] = useLocalStorage("tokenExpirationTimestamp", null);
  const [isConnectModalOpenned, setIsModalOpenned] = useState(
    !!parsedSearch?.isConnectModalOpenned || false
  );
  const setCurrentIsModalOpenned = (currentIsModalOpenned: boolean) => {
    history.push({
      search: queryString.stringify({
        ...(isOnPendingVerificationScreen && {
          isOnPendingVerificationScreen,
        }),
        ...(currentIsModalOpenned && {
          isConnectModalOpenned: currentIsModalOpenned,
        }),
      }),
    });

    setIsModalOpenned(currentIsModalOpenned);
  };
  const [
    isOnPendingVerificationScreen,
    setIsOnPendingVerificationScreen,
  ] = useState(!!parsedSearch?.isOnPendingVerificationScreen || false);
  const setCurrentIsOnPendingVerificationScreen = (
    currentIsOnPendingVerificationScreen: boolean
  ) => {
    history.push({
      search: queryString.stringify({
        ...(currentIsOnPendingVerificationScreen && {
          isOnPendingVerificationScreen: currentIsOnPendingVerificationScreen,
        }),
        ...(isConnectModalOpenned && {
          isConnectModalOpenned: isConnectModalOpenned,
        }),
      }),
    });

    setIsOnPendingVerificationScreen(currentIsOnPendingVerificationScreen);
  };

  const [user, setUser] = useState();

  useEffect(() => {
    if (!token || (token && Date.now() > tokenExpirationTimestamp)) {
      setToken(null);

      history.push("/");
    } else if (herotag && token) {
      getUserData(herotag).then((data) => {
        setUser(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, herotag, history, tokenExpirationTimestamp, setUser]);

  return (
    <AuthContext.Provider
      value={{
        isUserConnected: !!token,
        setToken,
        herotag,
        setHerotag,
        setTokenExpirationTimestamp,
        tokenExpirationTimestamp,
        user,
        isOnPendingVerificationScreen,
        setIsModalOpenned: setCurrentIsModalOpenned,
        setIsOnPendingVerificationScreen: setCurrentIsOnPendingVerificationScreen,
      }}
    >
      {children}
      <ModalConnect
        open={isConnectModalOpenned}
        handleClose={() => setCurrentIsModalOpenned(false)}
      ></ModalConnect>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

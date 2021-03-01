import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getUserData } from "../../services/user";
import { getItem } from "../../utils/localStorage";
import { Variation } from "../TabPanel/StreamElementsIntegration/interface";

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
    streamElements?: {
      variations: Variation[];
    };
  };
  isStreaming: boolean;
  streamingStartDate: Date;
}

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  herotag?: string;
  setToken: (s: any) => void;
  user?: UserType;
}>({
  isAuthenticated: false,
  setToken: (s: any) => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const tokenExpirationTimestamp = getItem("tokenExpirationTimestamp");
  const herotag = getItem("herotag") as string;

  const [user, setUser] = useState<UserType | undefined>();

  useEffect(() => {
    if (!token || (token && Date.now() > tokenExpirationTimestamp)) {
      setToken(null);
    }
  }, [token, setToken, tokenExpirationTimestamp]);

  useEffect(() => {
    if (token && herotag)
      getUserData(herotag).then((data) => {
        setUser(data);
      });
  }, [token, herotag, setUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        setToken,
        herotag,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

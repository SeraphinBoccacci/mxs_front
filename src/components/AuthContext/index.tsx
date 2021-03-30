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

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useQueryString } from "../../hooks/useQueryString";
import { getUserData } from "../../services/user";
import { ErrorHandlingContext } from "../ErrorHandlingContext";
import { Variation } from "../TabPanel/StreamElements/interface";

export enum UserAccountStatus {
  PENDING_VERIFICATION = 0,
  VERIFIED,
  PENDING_EDIT_PASSWORD_VERIFICATION,
}

export interface IftttParticleData {
  eventName: string;
  triggerKey: string;
  isActive: boolean;
}

export interface StreamElementData {
  variations: Variation[];
  rowsStructure: {
    rows: string[];
    rowsGroupName?: string | undefined;
  }[];
  isActive: boolean;
}

export interface UserType {
  _id?: string;
  password?: string;
  pendingPassword?: string;
  herotag?: string;
  erdAddress?: string;
  status: UserAccountStatus;
  verificationReference?: string;
  passwordEditionVerificationReference?: string;
  verificationStartDate?: string;
  passwordEditionVerificationStartDate?: string;
  integrations?: {
    ifttt?: IftttParticleData;
    streamElements?: StreamElementData;
    minimumRequiredAmount?: number;
  };
  isStreaming?: boolean;
  streamingStartDate?: Date | null;
}

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  herotag?: string;
  setTokenData: (
    s: { token: string; expirationTimestamp: number } | null
  ) => void;
  setHerotag: (herotag: string) => void;
  user?: UserType;
}>({
  isAuthenticated: false,
  setTokenData: () => {},
  setHerotag: () => {},
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

  useEffect(() => {
    if (!tokenData?.token || Date.now() > tokenData.expirationTimestamp) {
      setTokenData(null);
    }
  }, [setTokenData, tokenData, history]);

  useEffect(() => {
    if (isAuthenticated)
      getUserData()
        .then((data) => {
          setUser(data);
          setHerotag(data.herotag);
        })
        .catch((error) => {
          handleError(error?.message);
        });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

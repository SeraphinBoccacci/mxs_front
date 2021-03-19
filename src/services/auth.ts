import { UserAccountStatus } from "../components/AuthContext";
import config from "../config/config";
import { axiosGet, axiosPost } from "../utils/axios";

interface AuthenticateResponse {
  herotag: string;
  token: string;
  expiresIn: number;
}

export const authenticate = async (
  herotag: string,
  password: string
): Promise<AuthenticateResponse | undefined> => {
  return axiosPost(`${config.apiUrl}/authenticate`, {
    herotag,
    password,
  });
};

interface CreateAccountResponse {
  hasBeenSuccessfullyCreated: true;
  herotag: string;
}

export const createAccount = async (
  herotag: string,
  password: string,
  confirm: string
): Promise<CreateAccountResponse | undefined> => {
  return axiosPost(`${config.apiUrl}/create-account`, {
    herotag,
    password,
    confirm,
  });
};

export const getIsVerified = async (herotag: string): Promise<boolean> => {
  const data = await axiosGet(
    `${config.apiUrl}/verification-status/${herotag}`
  );

  return data?.isStatusVerified || false;
};

export const getReference = (
  herotag: string
): Promise<{
  verificationReference: string | null;
  accountStatus: UserAccountStatus;
}> => {
  return axiosGet(`${config.apiUrl}/verification-reference/${herotag}`);
};

// This request respond with submitted herotag if it is linked to an account else throw an error
export const submitHerotag = async (herotag: string): Promise<string> => {
  const data = await axiosGet(`${config.apiUrl}/is-valid-herotag/${herotag}`);

  return data?.herotag;
};

export const editPassword = async (
  herotag: string,
  password: string,
  confirm: string
): Promise<void> => {
  await axiosPost(`${config.apiUrl}/edit-password`, {
    herotag,
    password,
    confirm,
  });
};

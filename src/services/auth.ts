import axios from "axios";

import config from "../config/config";

export const authenticate = async (herotag: string, password: string) => {
  const res = await axios.post(`${config.apiUrl}/authenticate`, {
    herotag,
    password,
  });

  return res.data;
};

export const createAccount = async (
  herotag: string,
  password: string,
  confirm: string
) => {
  const res = await axios.post(`${config.apiUrl}/create-account`, {
    herotag,
    password,
    confirm,
  });

  return res.data;
};

export const getIsVerified = async (herotag: string) => {
  try {
    const res = await axios.get(
      `${config.apiUrl}//verification-status/${herotag}`
    );

    return res?.data || false;
  } catch (error) {}
};

export const getReference = async (herotag: string) => {
  const res = await axios.get(
    `${config.apiUrl}/verification-reference/${herotag}`
  );

  return res?.data || "";
};

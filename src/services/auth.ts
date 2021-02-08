import axios from "axios";

const URL = "http://localhost:4000/api";

export const authenticate = async (herotag: string, password: string) => {
  try {
    const res = await axios.post(`${URL}/authenticate`, {
      herotag,
      password,
    });

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const createAccount = async (
  herotag: string,
  password: string,
  confirm: string
) => {
  try {
    const res = await axios.post(`${URL}/create-account`, {
      herotag,
      password,
      confirm,
    });

    return res.data;
  } catch (err) {}
};

export const getIsVerified = async (herotag: string) => {
  try {
    const res = await axios.get(`${URL}//verification-status/${herotag}`);

    return res?.data || false;
  } catch (error) {}
};

export const getReference = async (herotag: string) => {
  try {
    const res = await axios.get(`${URL}/verification-reference/${herotag}`);

    return res?.data || "";
  } catch (error) {}
};

import axios from "axios";

import { getItem } from "./localStorage";

const extractToken = () => {
  const tokenData = getItem("tokenData");

  return tokenData?.token;
};

export const axiosPost = async (
  endPoint: string,
  body: object,
  { withToken } = { withToken: false }
) => {
  try {
    const config = {
      ...(withToken && {
        headers: {
          Authorization: `Bearer ${extractToken()}`,
        },
      }),
    };

    const res = await axios.post(endPoint, body, config);

    return res.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

export const axiosGet = async (
  endPoint: string,
  { withToken } = { withToken: false }
) => {
  try {
    const config = {
      ...(withToken && {
        headers: {
          Authorization: `Bearer ${extractToken()}`,
        },
      }),
    };

    const res = await axios.get(endPoint, config);

    return res.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

export const axiosPut = async (
  endPoint: string,
  body: object,
  { withToken } = { withToken: false }
) => {
  try {
    const config = {
      ...(withToken && {
        headers: {
          Authorization: `Bearer ${extractToken()}`,
        },
      }),
    };

    const res = await axios.put(endPoint, body, config);

    return res.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

export const axiosDelete = async (
  endPoint: string,
  { withToken } = { withToken: false }
) => {
  try {
    const config = {
      ...(withToken && {
        headers: {
          Authorization: `Bearer ${extractToken()}`,
        },
      }),
    };

    const res = await axios.delete(endPoint, config);

    return res.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

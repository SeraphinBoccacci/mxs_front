import axios from "axios";

import { getItem } from "./localStorage";

export const postWithAuth = async (endPoint: string, body: object) => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + getItem("token"),
      },
    };

    const res = await axios.post(endPoint, body, config);

    return res.data;
  } catch (err) {}
};

export const getWithAuth = async (endPoint: string) => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + getItem("token"),
      },
    };

    const res = await axios.get(endPoint, config);

    return res.data;
  } catch (err) {}
};

export const putWithAuth = async (endPoint: string, body: object) => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + getItem("token"),
      },
    };

    const res = await axios.put(endPoint, body, config);

    return res.data;
  } catch (err) {}
};

export const deleteWithAuth = async (endPoint: string) => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + getItem("token"),
      },
    };

    const res = await axios.delete(endPoint, config);

    return res.data;
  } catch (err) {}
};

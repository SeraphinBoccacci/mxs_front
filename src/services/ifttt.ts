import { postWithAuth } from "../utils/axios";

const URL = "http://localhost:4000/api";

export const modifyIftttIntegration = async (
  herotag: string,
  eventName: string,
  triggerKey: string
) => {
  try {
    const data = await postWithAuth(`${URL}/user/ifttt/${herotag}`, {
      ifttt: {
        eventName,
        triggerKey,
      },
    });

    return data;
  } catch (err) {}
};

export const toggleIftttIntegration = async (
  herotag: string,
  isActive: boolean
) => {
  try {
    const res = await postWithAuth(`${URL}/user/ifttt/is-active/${herotag}`, {
      isActive,
    });

    return res.data;
  } catch (err) {}
};

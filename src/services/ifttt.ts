import config from "../config/config";
import { postWithAuth } from "../utils/axios";

export const modifyIftttIntegration = async (
  herotag: string,
  eventName: string,
  triggerKey: string
) => {
  try {
    const data = await postWithAuth(
      `${config.development.apiUrl}/user/ifttt/${herotag}`,
      {
        ifttt: {
          eventName,
          triggerKey,
        },
      }
    );

    return data;
  } catch (err) {}
};

export const toggleIftttIntegration = async (
  herotag: string,
  isActive: boolean
) => {
  try {
    const res = await postWithAuth(
      `${config.development.apiUrl}/user/ifttt/is-active/${herotag}`,
      {
        isActive,
      }
    );

    return res.data;
  } catch (err) {}
};

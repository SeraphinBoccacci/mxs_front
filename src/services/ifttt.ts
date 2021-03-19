import config from "../config/config";
import { axiosPost } from "../utils/axios";

export const modifyIftttIntegration = async (
  herotag: string,
  eventName: string,
  triggerKey: string
) => {
  try {
    const data = await axiosPost(
      `${config.apiUrl}/user/ifttt/${herotag}`,
      {
        ifttt: {
          eventName,
          triggerKey,
        },
      },
      { withToken: true }
    );

    return data;
  } catch (err) {}
};

export const toggleIftttIntegration = async (
  herotag: string,
  isActive: boolean
) => {
  try {
    const res = await axiosPost(
      `${config.apiUrl}/user/ifttt/is-active/${herotag}`,
      {
        isActive,
      },
      { withToken: true }
    );

    return res.data;
  } catch (err) {}
};

import config from "../config/config";
import { getWithAuth, postWithAuth } from "../utils/axios";

export const toggleStreamingActivation = async (
  herotag: string,
  isStreaming: boolean
) => {
  try {
    const data = await postWithAuth(
      `${config.development.apiUrl}/user/poll-maiar/${herotag}`,
      {
        isStreaming,
      }
    );

    return data;
  } catch (err) {}
};

export const getUserData = async (herotag: string) => {
  const data = await getWithAuth(
    `${config.development.apiUrl}/user/${herotag}`
  );

  return data;
};

import config from "../config/config";
import { getWithAuth, postWithAuth } from "../utils/axios";

export const toggleStreamingActivation = async (
  herotag: string,
  isStreaming: boolean
) => {
  try {
    const data = await postWithAuth(
      `${config.apiUrl}/user/poll-maiar/${herotag}`,
      {
        isStreaming,
      }
    );

    return data;
  } catch (err) {}
};

export const getUserData = async (herotag: string) => {
  const data = await getWithAuth(`${config.apiUrl}/user/${herotag}`);

  return data;
};

export const triggerIftttEvent = (herotag: string) => {
  return postWithAuth(`${config.apiUrl}/user/trigger/ifttt`, {
    herotag,
  });
};

export const triggerStreamElementsEvent = (herotag: string) => {
  return postWithAuth(`${config.apiUrl}/user/trigger/streamElements`, {
    herotag,
  });
};

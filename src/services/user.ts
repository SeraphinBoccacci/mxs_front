import { getWithAuth, postWithAuth } from "../utils/axios";

const URL = "http://localhost:4000/api";

export const toggleStreamingActivation = async (
  herotag: string,
  isStreaming: boolean
) => {
  try {
    const data = postWithAuth(`${URL}/user/poll-maiar/${herotag}`, {
      isStreaming,
    });

    return data;
  } catch (err) {}
};

export const getUserData = async (herotag: string) => {
  const data = getWithAuth(`${URL}/user/${herotag}`);

  return data;
};

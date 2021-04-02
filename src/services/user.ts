import config from "../config/config";
import { axiosGet, axiosPost } from "../utils/axios";

export interface EventData {
  herotag: string;
  amount: string;
  data: string;
}

export const toggleStreamingActivation = async (
  herotag: string,
  isStreaming: boolean
) => {
  try {
    const data = await axiosPost(
      `${config.apiUrl}/user/poll-maiar/${herotag}`,
      {
        isStreaming,
      },
      { withToken: true }
    );

    return data;
  } catch (err) {}
};

export const getUserData = async () => {
  const data = await axiosGet(`${config.apiUrl}/user/herotag`, {
    withToken: true,
  });

  return data;
};

export const triggerEvent = (herotag: string, data: EventData) => {
  return axiosPost(
    `${config.apiUrl}/user/trigger-event`,
    {
      herotag,
      data,
    },
    { withToken: true }
  );
};

export const updateMinimumRequiredAmount = (
  herotag: string,
  minimumRequiredAmount: number
) => {
  return axiosPost(
    `${config.apiUrl}/user/minimum-required-amount`,
    {
      herotag,
      minimumRequiredAmount,
    },
    { withToken: true }
  );
};

export const updateViewerOnboardingData = (
  herotag: string,
  referralLink?: string,
  herotagQrCodePath?: string
) => {
  return axiosPost(
    `${config.apiUrl}/user/viewers-onboarding-data`,
    {
      herotag,
      referralLink,
      herotagQrCodePath,
    },
    { withToken: true }
  );
};

export const getViewerOnboardingData = (
  herotag: string
): Promise<{ referralLink?: string; herotagQrCodePath?: string }> => {
  return axiosGet(
    `${config.apiUrl}/user/viewers-onboarding-data/herotag/${herotag}`
  );
};

export const getEgldPrice = () => axiosGet(`${config.apiUrl}/egld-price`);

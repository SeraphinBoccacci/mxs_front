import config from "../../config/config";
import { axiosGet, axiosPut } from "../../utils/axios";

export const getDonationGoalSentAmount = async (
  herotag: string
): Promise<{ sentAmount: number }> => {
  const data = await axiosGet(
    `${config.apiUrl}/donation-goal-sent-amount/${herotag}`,
    {
      withToken: true,
    }
  );

  return data;
};

export const resetDonationGoal = async (herotag: string): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/donation-goal-sent-amount/${herotag}`,
    null,
    {
      withToken: true,
    }
  );
};

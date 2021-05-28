import config from "../../config/config";
import { DonationBar } from "../../types/donationBar";
import { axiosDelete, axiosGet, axiosPut } from "../../utils/axios";

const endpoint = `${config.apiUrl}/donationBar`;

export const getDonationBar = async (
  herotag: string,
  overlayId: string
): Promise<DonationBar> => {
  const data = await axiosGet(
    `${endpoint}/herotag/${herotag}/overlay/${overlayId}`,
    {
      withToken: true,
    }
  );

  return data;
};

export const updateDonationBar = async (
  herotag: string,
  overlayId: string,
  payload: Partial<DonationBar>
): Promise<void> => {
  await axiosPut(
    `${endpoint}`,
    { herotag, overlayId, payload },
    {
      withToken: true,
    }
  );
};

export const deleteDonationBar = async (
  herotag: string,
  overlayId: string
): Promise<void> => {
  await axiosDelete(`${endpoint}/herotag/${herotag}/overlay/${overlayId}`, {
    withToken: true,
  });
};

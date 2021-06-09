import config from "../config/config";
import { axiosPut } from "../utils/axios";

export const addBannedWord = async (
  userId: string,
  wordToAdd: string
): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/moderation/add-banned-word`,
    { userId, wordToAdd },
    { withToken: true }
  );
};

export const addBannedAddress = async (
  userId: string,
  addressToAdd: string
): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/moderation/add-banned-address`,
    { userId, addressToAdd },
    { withToken: true }
  );
};

export const addVipAddress = async (
  userId: string,
  addressToAdd: string
): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/moderation/add-vip-address`,
    { userId, addressToAdd },
    { withToken: true }
  );
};

export const removeBannedWord = async (
  userId: string,
  wordToRemove: string
): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/moderation/remove-banned-word`,
    { userId, wordToRemove },
    { withToken: true }
  );
};

export const removeBannedAddress = async (
  userId: string,
  addressToRemove: string
): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/moderation/remove-banned-address`,
    { userId, addressToRemove },
    { withToken: true }
  );
};

export const removeVipAddress = async (
  userId: string,
  addressToRemove: string
): Promise<void> => {
  await axiosPut(
    `${config.apiUrl}/moderation/remove-vip-address`,
    { userId, addressToRemove },
    { withToken: true }
  );
};

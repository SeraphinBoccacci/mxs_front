import config from "../../config/config";
import { AlertVariation } from "../../types/alerts";
import { VariationGroup } from "../../types/overlays";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../utils/axios";

const endpoint = `${config.apiUrl}/alerts`;

export const createAlertVariation = async (
  herotag: string,
  overlayId: string,
  variation: AlertVariation
): Promise<void> => {
  const res = await axiosPost(
    `${endpoint}/variation/`,
    { herotag, overlayId, variation },
    { withToken: true }
  );

  return res;
};

export const getAlertVariation = async (
  variationId: string
): Promise<AlertVariation> => {
  const data = await axiosGet(`${endpoint}/variation/${variationId}`, {
    withToken: true,
  });

  return data;
};

export const getUserAlertVariations = async (
  herotag: string
): Promise<{
  variations: AlertVariation[];
}> => {
  const data = await axiosGet(`${endpoint}/variations/${herotag}`, {
    withToken: true,
  });

  return data;
};

export const updateAlertVariation = async (
  herotag: string,
  overlayId: string,
  payload: AlertVariation
): Promise<void> => {
  const data = await axiosPut(
    `${endpoint}/variation`,
    { herotag, overlayId, payload },
    { withToken: true }
  );

  return data;
};

export const deleteAlertVariation = async (
  herotag: string,
  overlayId: string,
  variationId: string
): Promise<void> => {
  const data = await axiosDelete(
    `${endpoint}/herotag/${herotag}/overlay/${overlayId}/variation/${variationId}`,
    {
      withToken: true,
    }
  );

  return data;
};

export const createAlertVariationsGroup = async (
  herotag: string,
  overlayId: string
): Promise<void> => {
  const data = await axiosPost(
    `${endpoint}/group`,
    {
      herotag,
      overlayId,
    },
    { withToken: true }
  );

  return data;
};

export const updateAlertVariationsGroups = async (
  herotag: string,
  overlayId: string,
  groups: VariationGroup[]
): Promise<void> => {
  const data = await axiosPut(
    `${endpoint}/group`,
    {
      herotag,
      overlayId,
      groups,
    },
    { withToken: true }
  );

  return data;
};

export const deleteAlertsVariationsGroup = async (
  herotag: string,
  overlayId: string,
  groupId: string
): Promise<void> => {
  const data = await axiosDelete(
    `${endpoint}/group/herotag/${herotag}/overlay/${overlayId}/group/${groupId}`,
    { withToken: true }
  );

  return data;
};

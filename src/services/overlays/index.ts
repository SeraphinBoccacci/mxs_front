import config from "../../config/config";
import { OverlaysData } from "../../interfaces/overlays";
import { axiosDelete, axiosGet, axiosPost } from "../../utils/axios";
import {
  createAlertVariation,
  createAlertVariationsGroup,
  deleteAlertVariation,
  getAlertVariation,
  getUserAlertVariations,
  updateAlertVariation,
} from "./alerts";

const getUserOverlay = async (
  herotag: string,
  overlayId: string
): Promise<OverlaysData | null> => {
  const res = await axiosGet(
    `${config.apiUrl}/overlays/herotag/${herotag}/overlay/${overlayId}`
  );

  return res || null;
};

const getManyUserOverlays = async (
  herotag: string
): Promise<OverlaysData[]> => {
  const res = await axiosGet(`${config.apiUrl}/overlays/herotag/${herotag}`, {
    withToken: true,
  });

  return res || [];
};

const createOverlay = async (herotag: string) => {
  const res = await axiosPost(
    `${config.apiUrl}/overlays/herotag/${herotag}/overlay`,
    {},
    { withToken: true }
  );

  return res || [];
};

const deleteOverlay = async (herotag: string, overlayId: string) => {
  const res = await axiosDelete(
    `${config.apiUrl}/overlays/herotag/${herotag}/overlay/${overlayId}`,
    { withToken: true }
  );

  return res || [];
};

export enum WidgetsKinds {
  "ALERTS" = "ALERTS",
}

const addWidget = async (
  herotag: string,
  overlayId: string,
  widget: WidgetsKinds
) => {
  const res = await axiosPost(
    `${config.apiUrl}/overlays/add-widget`,
    { herotag, overlayId, widget },
    {
      withToken: true,
    }
  );

  return res;
};

export {
  addWidget,
  createAlertVariation,
  createAlertVariationsGroup,
  createOverlay,
  deleteAlertVariation,
  deleteOverlay,
  getAlertVariation,
  getManyUserOverlays,
  getUserAlertVariations,
  getUserOverlay,
  updateAlertVariation,
};

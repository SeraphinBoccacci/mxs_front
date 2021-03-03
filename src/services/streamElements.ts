import { Variation } from "../components/TabPanel/StreamElementsIntegration/interface";
import config from "../config/config";
import {
  deleteWithAuth,
  getWithAuth,
  postWithAuth,
  putWithAuth,
} from "../utils/axios";

export const uploadFile = async (
  fileType: "images" | "audios",
  file: File
): Promise<string> => {
  const formData = new FormData();

  formData.append("media", file, file.name);

  try {
    const filePath = await postWithAuth(
      `${config.uploadsUrl}/${fileType}`,
      formData
    );

    if (!filePath) throw new Error("NO_FILE_PATH_RETURNED");

    return filePath;
  } catch (error) {
    return "";
  }
};

const endpoint = `${config.apiUrl}/user/stream-elements/variation`;

export const createVariation = async (
  herotag: string,
  variation: Variation
): Promise<{
  variations: Variation[];
  files: { html: string; css: string; javascript: string };
}> => {
  const res = await postWithAuth(endpoint, { herotag, variation });

  return res;
};

export const getVariation = async (variationId: string): Promise<Variation> => {
  const res = await getWithAuth(`${endpoint}/${variationId}`);

  return res;
};

export const getUserVariations = async (
  herotag: string
): Promise<{
  variations: Variation[];
  files: { html: string; css: string; javascript: string };
}> => {
  const res = await getWithAuth(
    `${config.apiUrl}/user/stream-elements/variations/${herotag}`
  );

  return res;
};

export const updateVariation = async (
  variationId: string,
  variation: Variation
): Promise<{
  variation: Variation;
  files: { html: string; css: string; javascript: string };
}> => {
  const res = await putWithAuth(endpoint, { variationId, variation });

  return res;
};

export const deleteVariation = async (
  variationId: string
): Promise<{
  variations: Variation[];
  files: { html: string; css: string; javascript: string };
}> => {
  const res = await deleteWithAuth(`${endpoint}/${variationId}`);

  return res;
};

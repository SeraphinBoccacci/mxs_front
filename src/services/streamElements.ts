import { Variation } from "../components/TabPanel/StreamElements/interface";
import config from "../config/config";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../utils/axios";

export const uploadFile = async (
  fileType: "images" | "audios",
  file: File
): Promise<string> => {
  const formData = new FormData();

  formData.append("media", file, file.name);

  try {
    const filePath = await axiosPost(
      `${config.uploadsUrl}/${fileType}`,
      formData,
      { withToken: true }
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
  const res = await axiosPost(
    endpoint,
    { herotag, variation },
    { withToken: true }
  );

  return res;
};

export const getVariation = async (variationId: string): Promise<Variation> => {
  const data = await axiosGet(`${endpoint}/${variationId}`, {
    withToken: true,
  });

  return data;
};

export const getUserVariations = async (
  herotag: string
): Promise<{
  variations: Variation[];
  files: { html: string; css: string; javascript: string };
}> => {
  const data = await axiosGet(
    `${config.apiUrl}/user/stream-elements/variations/${herotag}`,
    { withToken: true }
  );

  return data;
};

export const updateVariation = async (
  variationId: string,
  variation: Variation
): Promise<{
  variation: Variation;
  files: { html: string; css: string; javascript: string };
}> => {
  const data = await axiosPut(
    endpoint,
    { variationId, variation },
    { withToken: true }
  );

  return data;
};

export const deleteVariation = async (
  variationId: string
): Promise<{
  variations: Variation[];
  files: { html: string; css: string; javascript: string };
}> => {
  const data = await axiosDelete(`${endpoint}/${variationId}`, {
    withToken: true,
  });

  return data;
};

export const getRowsStructure = async (
  herotag: string
): Promise<{ rows: string[]; rowsGroupName?: string }[]> => {
  const data = await axiosGet(
    `${config.apiUrl}/user/stream-elements/rows-structure/${herotag}`,
    { withToken: true }
  );

  return data;
};

export const updateRowsStructure = async (
  herotag: string,
  rowsStructure: { rows: string[]; rowsGroupName?: string }[]
) => {
  const data = await axiosPost(
    `${config.apiUrl}/user/stream-elements/rows-structure`,
    {
      herotag,
      rowsStructure,
    },
    { withToken: true }
  );

  return data;
};

export const toggleStreamElementsParticle = async (
  herotag: string,
  isActive: boolean
) => {
  try {
    const res = await axiosPost(
      `${config.apiUrl}/user/streamElements/is-active/${herotag}`,
      {
        isActive,
      },
      { withToken: true }
    );

    return res.data;
  } catch (err) {}
};

import { ColorResult } from "react-color";

export enum Converters {
  "rgba" = "rgba",
  "rgb" = "rgb",
  "hex" = "hex",
  "rgba_rgb" = "rgba_rgb",
  "rgba_hex" = "rgba_hex",
}

export const DEFAULT_CONVERTER = Converters.rgba;

export const converters = {
  rgba: (c: ColorResult) =>
    `rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`,
  rgb: (c: ColorResult) => `rgb(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b})`,
  hex: (c: ColorResult) => c.hex,

  rgba_rgb: (c: ColorResult) =>
    c.rgb.a === 1 ? converters.rgb(c) : converters.rgba(c),
  rgba_hex: (c: ColorResult) =>
    c.rgb.a === 1 ? converters.hex(c) : converters.rgba(c),
};

export default converters as {
  [kind in Converters]: (c: ColorResult) => string;
};

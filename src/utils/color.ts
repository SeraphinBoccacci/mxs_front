export const invertColor = (hex: string) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) return "#ffffff";

  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
};

const padZero = (str: string, len: number = 2) => {
  var zeros = new Array(len).join("0");

  return (zeros + str).slice(-len);
};

export const alphaToHex = (alpha: number = 0) => {
  return ((alpha * 255) | (1 << 8)).toString(16).slice(1);
};

const componentToHex = (c: number) => {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbToHex = (color: any) => {
  console.log("test", alphaToHex(color.a), color.a);

  return (
    "#" +
    componentToHex(color.r) +
    componentToHex(color.g) +
    componentToHex(color.b) +
    alphaToHex(color.a)
  );
};

export const hexToRgb = (hex: string) => {
  const matcher =
    hex.length === 7
      ? /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
      : /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = matcher.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: parseInt(result[4], 16),
      }
    : null;
};

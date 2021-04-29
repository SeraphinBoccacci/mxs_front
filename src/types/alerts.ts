export interface Sound {
  soundPath?: string;
  soundDelay?: string;
  soundOffset?: string;
}

export interface Image {
  imagePath?: string;
  width?: number;
  height?: number;
  animation?: Animation;
}

export interface Text {
  position?: TextPositions;
  content?: string;
  width?: number;
  height?: number;
  size?: string;
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  textAlign?: string;
  textStyle?: TextStyles[];
  animation?: Animation;
  stroke?: {
    color?: string;
    width?: number;
  };
}

export interface AlertVariation {
  _id: string;
  name: string;
  backgroundColor: string;
  duration?: number;
  chances?: number;
  requiredAmount?: number;
  width?: number;
  heigth?: number;
  offsetTop?: number;
  offsetLeft?: number;
  sound?: Sound;
  image?: Image;
  text?: Text;
  filepath?: string;
}

export enum AlertVariationLenses {
  "name" = "name",
  "duration" = "duration",
  "chances" = "chances",
  "requiredAmount" = "requiredAmount",
  "backgroundColor" = "backgroundColor",
  "width" = "width",
  "heigth" = "heigth",
  "offsetTop" = "offsetTop",
  "offsetLeft" = "offsetLeft",
  "position" = "position",
  "sound_soundPath" = "sound_soundPath",
  "sound_soundDelay" = "sound_soundDelay",
  "sound_soundOffset" = "sound_soundOffset",
  "image_imagePath" = "image_imagePath",
  "image_width" = "image_width",
  "image_height" = "image_height",
  "image_animation_enter_type" = "image_animation_enter_type",
  "image_animation_enter_duration" = "image_animation_enter_duration",
  "image_animation_enter_delay" = "image_animation_enter_delay",
  "image_animation_exit_type" = "image_animation_exit_type",
  "image_animation_exit_duration" = "image_animation_exit_duration",
  "image_animation_exit_offset" = "image_animation_exit_offset",
  "text_position" = "text_position",
  "text_content" = "text_content",
  "text_width" = "text_width",
  "text_height" = "text_height",
  "text_size" = "text_size",
  "text_color" = "text_color",
  "text_lineHeight" = "text_lineHeight",
  "text_letterSpacing" = "text_letterSpacing",
  "text_wordSpacing" = "text_wordSpacing",
  "text_textAlign" = "text_textAlign",
  "text_textStyle" = "text_textStyle",
  "text_stroke_width" = "text_stroke_width",
  "text_stroke_color" = "text_stroke_color",
  "text_animation_enter_type" = "text_animation_enter_type",
  "text_animation_enter_duration" = "text_animation_enter_duration",
  "text_animation_enter_delay" = "text_animation_enter_delay",
  "text_animation_exit_type" = "text_animation_exit_type",
  "text_animation_exit_duration" = "text_animation_exit_duration",
  "text_animation_exit_offset" = "text_animation_exit_offset",
}

export enum TextPositions {
  top = "top",
  bottom = "bottom",
  right = "right",
  left = "left",
  over = "over",
}

export enum TextAlignments {
  left = "left",
  center = "center",
  right = "right",
}

export enum EnterAnimationTypes {
  slideUp = "slide-up-enter",
  slideDown = "slide-down-enter",
  slideLeft = "slide-left-enter",
  slideRight = "slide-right-enter",
  fadeIn = "fade-in",
  growth = "grow",
}

export enum ExitAnimationTypes {
  slideUp = "slide-up-exit",
  slideDown = "slide-down-exit",
  slideLeft = "slide-left-exit",
  slideRight = "slide-right-exit",
  fadeOut = "fade-out",
  shrink = "shrink",
}

export enum TextStyles {
  bold = "bold",
  italic = "italic",
  underline = "underline",
}

interface Animation {
  enter?: { type?: EnterAnimationTypes; duration?: number; delay?: number };
  exit?: { type?: ExitAnimationTypes; duration?: number; offset?: number };
}

export interface AlertVariationData {
  name?: string;
  duration?: string;
  chances?: string;
  requiredAmount?: string;
  backgroundColor?: string;
  width?: number;
  heigth?: number;
  offsetTop?: number;
  offsetLeft?: number;
  position?: string;
  sound_soundPath?: string;
  sound_soundDelay?: string;
  sound_soundOffset?: string;
  image_imagePath?: string;
  image_width?: string;
  image_height?: string;
  image_animation_enter_type?: string;
  image_animation_enter_duration?: string;
  image_animation_enter_delay?: string;
  image_animation_exit_type?: string;
  image_animation_exit_duration?: string;
  image_animation_exit_offset?: string;
  text_position?: string;
  text_content?: string;
  text_width?: string;
  text_height?: string;
  text_size?: string;
  text_color?: string;
  text_stroke_width?: number;
  text_stroke_color?: string;
  text_lineHeight?: string;
  text_letterSpacing?: string;
  text_wordSpacing?: string;
  text_textAlign?: string;
  text_textStyle?: TextStyles[];
  text_animation_enter_type?: string;
  text_animation_enter_duration?: string;
  text_animation_enter_delay?: string;
  text_animation_exit_type?: string;
  text_animation_exit_duration?: string;
  text_animation_exit_offset?: string;
}

export type AlertVariationFormData = AlertVariationData & {
  [x: string]: string;
};

export interface Alerts {
  variations: AlertVariation[];
}

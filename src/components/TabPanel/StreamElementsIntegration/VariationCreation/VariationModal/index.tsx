import { Button } from "@material-ui/core";
import { set } from "lodash";
import React, { createRef, useCallback, useRef } from "react";

import { updateVariation as putUpdateVariation } from "../../../../../services/streamElements";
import {
  EnterAnimationTypes,
  ExitAnimationTypes,
  TextPositions,
  TextStyles,
  Variation,
  VariationLenses,
  VariationPositions,
} from "../../interface";
import { VariationsFiles } from "..";
import { AnimationSettings } from "./AnimationSettings";
import { textPositionsOptions } from "./constants";
import Input from "./Input";
import Select from "./Select";
import {
  Comment,
  Modal,
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
} from "./style";
import { ModalContent, ModalHeader } from "./style";
import { TextAlignRadioGroup } from "./TextAlignRadioGroup";
import { TextStylesCheckboxes } from "./TextStylesCheckboxes";
import Upload from "./Upload";

interface VariationModalProps {
  variationData?: Variation;
  setFiles: React.Dispatch<React.SetStateAction<VariationsFiles | undefined>>;
  updateVariation?: (updatedVariation: Variation) => void;
  setVariationModalData: (variation?: Variation) => void;
}

export const VariationModal = ({
  variationData,
  setFiles,
  updateVariation,
  setVariationModalData,
}: VariationModalProps) => {
  if (!variationData || !updateVariation) return null;

  const nameRef = createRef<HTMLInputElement>();
  const durationRef = createRef<HTMLInputElement>();
  const chancesRef = createRef<HTMLInputElement>();
  const requiredAmountRef = createRef<HTMLInputElement>();
  const backgroundColorRef = createRef<HTMLInputElement>();
  const widthRef = createRef<HTMLInputElement>();
  const heigthRef = createRef<HTMLInputElement>();
  const positionRef = useRef<{ value: VariationPositions }>({
    value: variationData.position || VariationPositions.BottomCenter,
  });
  const sound_soundPathRef = useRef<{ path: string }>({
    path: variationData.sound?.soundPath || "",
  });
  const sound_soundDelayRef = createRef<HTMLInputElement>();
  const sound_soundOffsetRef = createRef<HTMLInputElement>();
  const image_imagePathRef = useRef<{ path: string }>({
    path: variationData.image?.imagePath || "",
  });
  const image_widthRef = createRef<HTMLInputElement>();
  const image_heightRef = createRef<HTMLInputElement>();
  const image_animation_enter_typeRef = useRef<{ value: EnterAnimationTypes }>({
    value:
      variationData.image?.animation?.enter?.type ||
      EnterAnimationTypes.slideUp,
  });
  const image_animation_enter_durationRef = createRef<HTMLInputElement>();
  const image_animation_enter_delayRef = createRef<HTMLInputElement>();
  const image_animation_exit_typeRef = useRef<{ value: ExitAnimationTypes }>({
    value:
      variationData.image?.animation?.exit?.type || ExitAnimationTypes.slideUp,
  });
  const image_animation_exit_durationRef = createRef<HTMLInputElement>();
  const image_animation_exit_offsetRef = createRef<HTMLInputElement>();
  const text_positionRef = useRef<{ value: TextPositions }>({
    value: variationData.text?.position || TextPositions.top,
  });
  const text_contentRef = createRef<HTMLInputElement>();
  const text_widthRef = createRef<HTMLInputElement>();
  const text_heightRef = createRef<HTMLInputElement>();
  const text_sizeRef = createRef<HTMLInputElement>();
  const text_colorRef = createRef<HTMLInputElement>();
  const text_lineHeightRef = createRef<HTMLInputElement>();
  const text_letterSpacingRef = createRef<HTMLInputElement>();
  const text_wordSpacingRef = createRef<HTMLInputElement>();
  const text_textAlignRef = useRef<{ textAlign: string }>({
    textAlign: variationData.text?.textAlign || "left",
  });
  const text_textStyleRef = useRef<{ textStyles: TextStyles[] }>({
    textStyles: variationData.text?.textStyle || [],
  });
  const text_animation_enter_typeRef = useRef<{ value: EnterAnimationTypes }>({
    value:
      variationData.text?.animation?.enter?.type || EnterAnimationTypes.slideUp,
  });
  const text_animation_enter_durationRef = createRef<HTMLInputElement>();
  const text_animation_enter_delayRef = createRef<HTMLInputElement>();
  const text_animation_exit_typeRef = useRef<{ value: ExitAnimationTypes }>({
    value:
      variationData.text?.animation?.exit?.type || ExitAnimationTypes.slideUp,
  });
  const text_animation_exit_durationRef = createRef<HTMLInputElement>();
  const text_animation_exit_offsetRef = createRef<HTMLInputElement>();

  const formDataToPayload = () => {
    const formData = {
      nameRef: nameRef.current?.value,
      durationRef: durationRef.current?.value,
      chancesRef: chancesRef.current?.value,
      requiredAmountRef: requiredAmountRef.current?.value,
      backgroundColorRef: backgroundColorRef.current?.value,
      widthRef: widthRef.current?.value,
      heigthRef: heigthRef.current?.value,
      positionRef: positionRef.current?.value,
      sound_soundPathRef: sound_soundPathRef.current?.path,
      sound_soundDelayRef: sound_soundDelayRef.current?.value,
      sound_soundOffsetRef: sound_soundOffsetRef.current?.value,
      image_imagePathRef: image_imagePathRef.current?.path,
      image_widthRef: image_widthRef.current?.value,
      image_heightRef: image_heightRef.current?.value,
      image_animation_enter_typeRef:
        image_animation_enter_typeRef.current?.value,
      image_animation_enter_durationRef:
        image_animation_enter_durationRef.current?.value,
      image_animation_enter_delayRef:
        image_animation_enter_delayRef.current?.value,
      image_animation_exit_typeRef: image_animation_exit_typeRef.current?.value,
      image_animation_exit_durationRef:
        image_animation_exit_durationRef.current?.value,
      image_animation_exit_offsetRef:
        image_animation_exit_offsetRef.current?.value,
      text_positionRef: text_positionRef.current?.value,
      text_contentRef: text_contentRef.current?.value,
      text_widthRef: text_widthRef.current?.value,
      text_heightRef: text_heightRef.current?.value,
      text_sizeRef: text_sizeRef.current?.value,
      text_colorRef: text_colorRef.current?.value,
      text_lineHeightRef: text_lineHeightRef.current?.value,
      text_letterSpacingRef: text_letterSpacingRef.current?.value,
      text_wordSpacingRef: text_wordSpacingRef.current?.value,
      text_textAlignRef: text_textAlignRef.current?.textAlign,
      text_textStyleRef: text_textStyleRef.current?.textStyles,
      text_animation_enter_typeRef: text_animation_enter_typeRef.current?.value,
      text_animation_enter_durationRef:
        text_animation_enter_durationRef.current?.value,
      text_animation_enter_delayRef:
        text_animation_enter_delayRef.current?.value,
      text_animation_exit_typeRef: text_animation_exit_typeRef.current?.value,
      text_animation_exit_durationRef:
        text_animation_exit_durationRef.current?.value,
      text_animation_exit_offsetRef:
        text_animation_exit_offsetRef.current?.value,
    };

    return Object.entries(formData).reduce((variationData, [key, value]) => {
      const path = key.replaceAll("Ref", "").split("_");

      const newVariation = set(variationData, path, value || "");

      return newVariation;
    }, {}) as Variation;
  };

  const handleClick = useCallback(async () => {
    const newSnapshot = formDataToPayload();

    if (variationData?._id) {
      const updates = { ...variationData, ...newSnapshot };

      const {
        variation: savedUpdatedVariation,
        files,
      } = await putUpdateVariation(variationData._id as string, updates);

      setVariationModalData(undefined);

      updateVariation(savedUpdatedVariation);
      setFiles(files);
    }
  }, [setVariationModalData, updateVariation, variationData]);

  const handleClose = useCallback(() => {
    const newVariationData = formDataToPayload();

    setVariationModalData(undefined);

    updateVariation({ ...variationData, ...newVariationData });
  }, [setVariationModalData, updateVariation, variationData]);

  return (
    <Modal open={!!variationData && !!updateVariation} onClose={handleClose}>
      <ModalContent>
        <ModalHeader>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Save
          </Button>
        </ModalHeader>
        <Section>
          <SectionTitle>Variation</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Input
                key={VariationLenses.name}
                inputLabel="Name"
                inputName={VariationLenses.name}
                inputRef={nameRef}
                value={variationData?.name || ""}
              ></Input>
              <Input
                key={VariationLenses.duration}
                inputLabel="Duration"
                tooltipText="Variation duration"
                inputName={VariationLenses.duration}
                inputRef={durationRef}
                value={variationData?.duration || ""}
                isTypeNumber
                endAdornment="seconds"
              ></Input>
              <Input
                key={VariationLenses.requiredAmount}
                inputLabel="Required Amount"
                tooltipText="Required amount to display variation"
                inputName={VariationLenses.requiredAmount}
                inputRef={requiredAmountRef}
                value={variationData?.requiredAmount || ""}
                isTypeNumber
                endAdornment="¤EGLD¤"
              ></Input>
              <Input
                key={VariationLenses.chances}
                inputLabel="Chances"
                tooltipText="To randomly use variation if amount sent match required one"
                inputName={VariationLenses.chances}
                inputRef={chancesRef}
                value={variationData?.chances || ""}
                isTypeNumber
              ></Input>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.backgroundColor}
                inputLabel="Background Color"
                inputName={VariationLenses.backgroundColor}
                inputRef={backgroundColorRef}
                value={variationData?.backgroundColor || "#ffffff"}
              ></Input>
              {/* <Select
                key={VariationLenses.position}
                options={variationPositionOptions}
                inputName={VariationLenses.position}
                inputRef={positionRef}
                inputLabel="Position"
                value={variationData?.position || ""}
              ></Select>
              <Input
                key={VariationLenses.width}
                inputLabel="Width"
                inputName={VariationLenses.width}
                inputRef={widthRef}
                value={variationData?.width || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
              <Input
                key={VariationLenses.heigth}
                inputLabel="Height"
                inputName={VariationLenses.heigth}
                inputRef={heigthRef}
                value={variationData?.heigth || ""}
                isTypeNumber
                endAdornment="px"
              ></Input> */}
            </SectionRow>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Sound</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Upload
                key={VariationLenses.sound_soundPath}
                inputLabel="Upload Audio"
                inputName={VariationLenses.sound_soundPath}
                inputRef={sound_soundPathRef}
                isAudio
              ></Upload>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.sound_soundDelay}
                inputLabel="Sound Delay"
                inputName={VariationLenses.sound_soundDelay}
                inputRef={sound_soundDelayRef}
                value={variationData?.sound?.soundDelay || ""}
                isTypeNumber
                endAdornment="seconds"
                tooltipText="Time between alert end and alert start"
              ></Input>
              <Input
                key={VariationLenses.sound_soundOffset}
                inputLabel="Sound Offset"
                inputName={VariationLenses.sound_soundOffset}
                inputRef={sound_soundOffsetRef}
                value={variationData?.sound?.soundOffset || ""}
                isTypeNumber
                endAdornment="seconds"
                tooltipText="Time between alert end and alert end"
              ></Input>
            </SectionRow>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Image</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Upload
                key={VariationLenses.image_imagePath}
                inputRef={image_imagePathRef}
                inputLabel="Upload Image"
                inputName={VariationLenses.image_imagePath}
              ></Upload>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.image_width}
                inputRef={image_widthRef}
                inputLabel="Width"
                inputName={VariationLenses.image_width}
                value={variationData?.image?.width || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
              <Input
                key={VariationLenses.image_height}
                inputRef={image_heightRef}
                inputLabel="Height"
                inputName={VariationLenses.image_height}
                value={variationData?.image?.height || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
            </SectionRow>
            <AnimationSettings
              key="animation_setting_image"
              variation={variationData as Variation}
              pathString="image"
              inputRefs={{
                enter_animationRef: image_animation_enter_typeRef,
                enter_durationRef: image_animation_enter_durationRef,
                enter_delayRef: image_animation_enter_delayRef,
                exit_animationRef: image_animation_exit_typeRef,
                exit_durationRef: image_animation_exit_durationRef,
                exit_offsetRef: image_animation_exit_offsetRef,
              }}
            ></AnimationSettings>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Text</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Select
                key={VariationLenses.text_position}
                inputRef={text_positionRef}
                options={textPositionsOptions}
                inputName={VariationLenses.text_position}
                inputLabel="Text Position"
                size="large"
                value={variationData?.text?.position || ""}
              ></Select>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.text_content}
                inputRef={text_contentRef}
                inputLabel="Text Content"
                inputName={VariationLenses.text_content}
                value={variationData?.text?.content || ""}
                isTextContent
              ></Input>
              <Comment>
                You can use the variables <i>{"{{herotag}}"}</i>,{"  "}
                <i>{"{{amount}}"}</i> and <i>{"{{message}}"}</i> in your text
              </Comment>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.text_width}
                inputRef={text_widthRef}
                inputLabel="Width"
                inputName={VariationLenses.text_width}
                value={variationData?.text?.width || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
              <Input
                key={VariationLenses.text_height}
                inputRef={text_heightRef}
                inputLabel="Height"
                inputName={VariationLenses.text_height}
                value={variationData?.text?.height || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.text_size}
                inputRef={text_sizeRef}
                inputLabel="Font Size"
                inputName={VariationLenses.text_size}
                value={variationData?.text?.size || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
              <Input
                key={VariationLenses.text_color}
                inputRef={text_colorRef}
                inputLabel="Font Color"
                inputName={VariationLenses.text_color}
                value={variationData?.text?.color || ""}
              ></Input>
            </SectionRow>
            <SectionRow>
              <Input
                key={VariationLenses.text_lineHeight}
                inputRef={text_lineHeightRef}
                inputLabel="Line Height"
                inputName={VariationLenses.text_lineHeight}
                value={variationData?.text?.lineHeight || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
              <Input
                key={VariationLenses.text_letterSpacing}
                inputRef={text_letterSpacingRef}
                inputLabel="Letter Spacing"
                inputName={VariationLenses.text_letterSpacing}
                value={variationData?.text?.letterSpacing || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
              <Input
                key={VariationLenses.text_wordSpacing}
                inputRef={text_wordSpacingRef}
                inputLabel="Word Spacing"
                inputName={VariationLenses.text_wordSpacing}
                value={variationData?.text?.wordSpacing || ""}
                isTypeNumber
                endAdornment="px"
              ></Input>
            </SectionRow>
            <TextAlignRadioGroup
              inputRef={text_textAlignRef}
            ></TextAlignRadioGroup>
            <TextStylesCheckboxes
              inputRef={text_textStyleRef}
            ></TextStylesCheckboxes>
            <AnimationSettings
              inputRefs={{
                enter_animationRef: text_animation_enter_typeRef,
                enter_durationRef: text_animation_enter_durationRef,
                enter_delayRef: text_animation_enter_delayRef,
                exit_animationRef: text_animation_exit_typeRef,
                exit_durationRef: text_animation_exit_durationRef,
                exit_offsetRef: text_animation_exit_offsetRef,
              }}
              key="animation_setting_text"
              variation={variationData as Variation}
              pathString="text"
            ></AnimationSettings>
          </SectionContent>
        </Section>
      </ModalContent>
    </Modal>
  );
};

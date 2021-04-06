import { Button } from "@material-ui/core";
import { set } from "lodash";
import React, { useCallback, useEffect } from "react";

import { useForm } from "../../../../../hooks/useForm";
import { updateVariation as putUpdateVariation } from "../../../../../services/streamElements";
import Input from "../../../../Input";
import Select from "../../../../Select";
import Upload from "../../../../Upload";
import {
  TextStyles,
  Variation,
  VariationFormData,
  VariationLenses,
} from "../../interface";
import { VariationsFiles } from "..";
import { AnimationSettings } from "./AnimationSettings";
import { textPositionsOptions, variationPositionOptions } from "./constants";
import {
  Comment,
  Modal,
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
  SubSection,
  SubSectionTitle,
} from "./style";
import { ModalContent, ModalHeader } from "./style";
import { TextAlignRadioGroup } from "./TextAlignRadioGroup";
import { TextStylesCheckboxes } from "./TextStylesCheckboxes";

interface VariationModalProps {
  variationData?: Variation;
  setFiles: React.Dispatch<React.SetStateAction<VariationsFiles | undefined>>;
  updateVariation?: (updatedVariation: Variation) => void;
  onClose: () => void;
}

const formatFormData = (formData: { [x: string]: string | TextStyles[] }) => {
  return Object.entries(formData).reduce((variationData, [key, value]) => {
    const path = key.replaceAll("Ref", "").split("_");

    const newVariation = set(variationData, path, value || "");

    return newVariation;
  }, {}) as Variation;
};

const isObject = (variable: any) => {
  return Object.prototype.toString.call(variable) === "[object Object]";
};

const formatVariation = (variation: Variation | null) => {
  if (!variation) return {};

  const nestedFields = (nest: object, path: string): [string, any][] => {
    const fieldEntries = Object.entries(nest);

    return fieldEntries.flatMap(([fieldKey, fieldValue]) => {
      const fieldPath = !!path ? `${path}_${fieldKey}` : fieldKey;

      return isObject(fieldValue)
        ? nestedFields(fieldValue, fieldPath)
        : [[fieldPath, fieldValue]];
    });
  };

  return Object.fromEntries(nestedFields(variation, ""));
};

export const VariationModal = ({
  variationData,
  setFiles,
  updateVariation,
  onClose,
}: VariationModalProps) => {
  const [formData, setFormData] = useForm<VariationFormData>({});

  useEffect(() => {
    setFormData({ value: formatVariation(variationData || null) });
  }, [setFormData, variationData]);

  const handleClick = useCallback(async () => {
    const newSnapshot = formatFormData(formData);

    if (variationData?._id) {
      const updates = { ...variationData, ...newSnapshot };

      const {
        variation: savedUpdatedVariation,
        files,
      } = await putUpdateVariation(variationData._id as string, updates);

      onClose();

      if (updateVariation) updateVariation(savedUpdatedVariation);
      setFiles(files);
    }
  }, [onClose, updateVariation, variationData, formData, setFiles]);

  const handleClose = useCallback(() => {
    const newVariationData = formatFormData(formData);

    onClose();

    if (updateVariation)
      updateVariation({ ...variationData, ...newVariationData });
  }, [onClose, updateVariation, variationData, formData]);

  const handleOnChange = useCallback(
    (event) => {
      setFormData(event);
    },
    [setFormData]
  );

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
                inputLabel="Name"
                inputName={VariationLenses.name}
                onChange={handleOnChange}
                value={formData?.name}
                width="10rem"
              ></Input>
              <Input
                inputLabel="Duration"
                tooltipText="Variation duration"
                inputName={VariationLenses.duration}
                onChange={handleOnChange}
                value={formData?.duration}
                type="number"
                endAdornment="seconds"
                width="3rem"
              ></Input>
              <Input
                inputLabel="Required Amount"
                tooltipText="Required amount to display variation"
                inputName={VariationLenses.requiredAmount}
                onChange={handleOnChange}
                value={formData?.requiredAmount}
                endAdornment="EGLD"
                type="number"
                width="3rem"
              ></Input>
              <Input
                inputLabel="Chances"
                tooltipText="To randomly use variation if amount sent match required one"
                inputName={VariationLenses.chances}
                onChange={handleOnChange}
                value={formData?.chances}
                type="number"
                width="3rem"
              ></Input>
            </SectionRow>
            <SectionRow>
              <Input
                inputLabel="Background Color"
                inputName={VariationLenses.backgroundColor}
                onChange={handleOnChange}
                value={formData?.backgroundColor || "#ffffff"}
                width="4rem"
              ></Input>
              <Select
                options={variationPositionOptions}
                inputName={VariationLenses.position}
                onChange={handleOnChange}
                inputLabel="Position"
                value={formData?.position}
              ></Select>
              <Input
                inputLabel="Width"
                inputName={VariationLenses.width}
                onChange={handleOnChange}
                value={formData?.width}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
              <Input
                inputLabel="Height"
                inputName={VariationLenses.heigth}
                onChange={handleOnChange}
                value={formData?.heigth}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
            </SectionRow>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Sound</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Upload
                inputLabel="Upload Audio"
                inputName={VariationLenses.sound_soundPath}
                value={formData?.[VariationLenses.sound_soundPath]}
                onChange={handleOnChange}
                isAudio
              ></Upload>
            </SectionRow>
            <SectionRow>
              <Input
                inputLabel="Sound Delay"
                inputName={VariationLenses.sound_soundDelay}
                onChange={handleOnChange}
                value={formData?.[VariationLenses.sound_soundDelay]}
                type="number"
                endAdornment="seconds"
                tooltipText="Time between alert end and alert start"
                width="3rem"
              ></Input>
              <Input
                inputLabel="Sound Offset"
                inputName={VariationLenses.sound_soundOffset}
                onChange={handleOnChange}
                value={formData?.[VariationLenses.sound_soundOffset]}
                type="number"
                endAdornment="seconds"
                tooltipText="Time between alert end and alert end"
                width="3rem"
              ></Input>
            </SectionRow>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Image</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Upload
                onChange={handleOnChange}
                inputLabel="Upload Image"
                value={formData?.[VariationLenses.image_imagePath]}
                inputName={VariationLenses.image_imagePath}
              ></Upload>
            </SectionRow>
            <SectionRow>
              <Input
                onChange={handleOnChange}
                inputLabel="Width"
                inputName={VariationLenses.image_width}
                value={formData?.[VariationLenses.image_width]}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
              <Input
                onChange={handleOnChange}
                inputLabel="Height"
                inputName={VariationLenses.image_height}
                value={formData?.[VariationLenses.image_height]}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
            </SectionRow>
            <AnimationSettings
              key="animation_setting_image"
              formData={formData}
              pathString="image"
              onChange={handleOnChange}
            ></AnimationSettings>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Text</SectionTitle>
          <SectionContent>
            <SectionRow>
              <Select
                onChange={handleOnChange}
                options={textPositionsOptions}
                inputName={VariationLenses.text_position}
                inputLabel="Text Position"
                size="large"
                value={formData?.[VariationLenses.text_position]}
              ></Select>
            </SectionRow>
            <SectionRow>
              <Input
                onChange={handleOnChange}
                inputLabel="Text Content"
                inputName={VariationLenses.text_content}
                value={formData?.[VariationLenses.text_content]}
                isTextContent
                width="30rem"
              ></Input>
              <Comment>
                You can use the variables <i>{"{{herotag}}"}</i>,{"  "}
                <i>{"{{amount}}"}</i> and <i>{"{{message}}"}</i> in your text
              </Comment>
            </SectionRow>
            <SectionRow>
              <Input
                onChange={handleOnChange}
                inputLabel="Width"
                inputName={VariationLenses.text_width}
                value={formData?.[VariationLenses.text_width]}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
              <Input
                onChange={handleOnChange}
                inputLabel="Height"
                inputName={VariationLenses.text_height}
                value={formData?.[VariationLenses.text_height]}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
              <Input
                onChange={handleOnChange}
                inputLabel="Font Size"
                inputName={VariationLenses.text_size}
                value={formData?.[VariationLenses.text_size]}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
              <Input
                onChange={handleOnChange}
                inputLabel="Font Color"
                inputName={VariationLenses.text_color}
                value={formData?.[VariationLenses.text_color]}
                width="4rem"
              ></Input>
            </SectionRow>
            <SectionRow>
              <Input
                onChange={handleOnChange}
                inputLabel="Line Height"
                inputName={VariationLenses.text_lineHeight}
                value={formData?.[VariationLenses.text_lineHeight]}
                type="number"
                endAdornment="px"
                width="3rem"
              ></Input>
              <Input
                onChange={handleOnChange}
                inputLabel="Letter Spacing"
                inputName={VariationLenses.text_letterSpacing}
                value={formData?.[VariationLenses.text_letterSpacing]}
                type="number"
                endAdornment="px"
                width="4rem"
              ></Input>
              <Input
                onChange={handleOnChange}
                inputLabel="Word Spacing"
                inputName={VariationLenses.text_wordSpacing}
                value={formData?.[VariationLenses.text_wordSpacing]}
                type="number"
                endAdornment="px"
                width="4rem"
              ></Input>
            </SectionRow>{" "}
            <TextAlignRadioGroup
              value={formData?.[VariationLenses.text_textAlign] as string}
              onChange={handleOnChange}
            ></TextAlignRadioGroup>
            <TextStylesCheckboxes
              value={formData?.[VariationLenses.text_textStyle] as TextStyles[]}
              onChange={handleOnChange}
            ></TextStylesCheckboxes>
            <SubSection>
              <SubSectionTitle>Text Stroke</SubSectionTitle>
              <SectionRow>
                <Input
                  onChange={handleOnChange}
                  inputLabel="Stroke Width"
                  inputName={VariationLenses.text_stroke_width}
                  value={formData?.[VariationLenses.text_stroke_width]}
                  type="number"
                  endAdornment="px"
                  width="4rem"
                ></Input>
                <Input
                  onChange={handleOnChange}
                  inputLabel="Stroke Color"
                  inputName={VariationLenses.text_stroke_color}
                  value={formData?.[VariationLenses.text_stroke_color]}
                  width="4rem"
                ></Input>
              </SectionRow>
            </SubSection>
            <AnimationSettings
              onChange={handleOnChange}
              key="animation_setting_text"
              formData={formData}
              pathString="text"
            ></AnimationSettings>
          </SectionContent>
        </Section>
      </ModalContent>
    </Modal>
  );
};

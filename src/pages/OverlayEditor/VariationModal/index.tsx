import { Button } from "@material-ui/core";
import { omit, set } from "lodash";
import React, { useCallback, useEffect } from "react";

import { useForm } from "../../../hooks/useForm";
import {
  AlertVariation,
  AlertVariationFormData,
  TextStyles,
} from "../../../types/alerts";
import ImageParameters from "./ImageParameters";
import SoundParameters from "./SoundParameters";
import { Modal } from "./style";
import { ModalContent, ModalHeader } from "./style";
import TextParameters from "./TextParameters";
import VariationParameters from "./VariationParameters";

interface VariationModalProps {
  variationData?: AlertVariation;
  updateVariation?: (updatedVariation: AlertVariation) => void;
  onClose: () => void;
}

const formatFormData = (formData: { [x: string]: string | TextStyles[] }) => {
  return Object.entries(formData).reduce((variationData, [key, value]) => {
    const path = key.replaceAll("Ref", "").split("_");

    const newVariation = set(variationData, path, value || "");

    return newVariation;
  }, {}) as AlertVariation;
};

const isObject = (variable: any) => {
  return Object.prototype.toString.call(variable) === "[object Object]";
};

const formatVariation = (variation: AlertVariation | null) => {
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

const VariationModal = ({
  variationData,
  updateVariation,
  onClose,
}: VariationModalProps) => {
  const [formData, setFormData] = useForm<AlertVariationFormData>({});

  useEffect(() => {
    setFormData({ value: formatVariation(variationData || null) });
  }, [setFormData, variationData]);

  const handleClick = useCallback(async () => {
    const newSnapshot = formatFormData(omit(formData, "_id"));

    if (variationData?._id && updateVariation) {
      await updateVariation({
        ...newSnapshot,
        _id: variationData._id,
      });

      onClose();
    }
  }, [onClose, updateVariation, variationData, formData]);

  const handleOnChange = useCallback(
    (event) => {
      setFormData(event);
    },
    [setFormData]
  );

  return (
    <Modal open={!!variationData && !!updateVariation} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Save
          </Button>
        </ModalHeader>
        <VariationParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></VariationParameters>

        <SoundParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></SoundParameters>

        <ImageParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></ImageParameters>

        <TextParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></TextParameters>
      </ModalContent>
    </Modal>
  );
};

export default VariationModal;

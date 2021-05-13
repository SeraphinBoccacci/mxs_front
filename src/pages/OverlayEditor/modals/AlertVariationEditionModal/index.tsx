import { Button } from "@material-ui/core";
import { omit, set } from "lodash";
import React, { useCallback, useEffect } from "react";

import { useAuth } from "../../../../components/AuthContext";
import { useErrorHandlingContext } from "../../../../components/ErrorHandlingContext";
import { useForm } from "../../../../hooks/useForm";
import { updateAlertVariation } from "../../../../services/overlays";
import {
  AlertVariation,
  AlertVariationFormData,
} from "../../../../types/alerts";
import { TextStyles } from "../../../../types/style";
import { useEditorContext } from "../../Context";
import { Modal, ModalContent, ModalHeader } from "../styles";
import ImageParameters from "./ImageParameters";
import SoundParameters from "./SoundParameters";
import TextParameters from "./TextParameters";
import VariationParameters from "./VariationParameters";

interface AlertVariationEditionModalProps {
  variationData?: AlertVariation;
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

const AlertVariationEditionModal = ({
  variationData,
  onClose,
}: AlertVariationEditionModalProps) => {
  const [formData, setFormData] = useForm<AlertVariationFormData>({});
  const { herotag } = useAuth();
  const { overlay, getOverlayData } = useEditorContext();
  const { handleError } = useErrorHandlingContext();

  useEffect(() => {
    setFormData({ value: formatVariation(variationData || null) });
  }, [setFormData, variationData]);

  const updateVariation = useCallback(
    async (updatedVariation: AlertVariation) => {
      try {
        if (overlay?._id && herotag) {
          await updateAlertVariation(herotag, overlay?._id, updatedVariation);

          await getOverlayData();
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [getOverlayData, handleError, herotag, overlay?._id]
  );

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

export default AlertVariationEditionModal;

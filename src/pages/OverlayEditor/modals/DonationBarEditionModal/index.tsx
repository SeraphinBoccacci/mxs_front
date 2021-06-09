import { Button } from "@material-ui/core";
import { omit, set } from "lodash";
import React, { useCallback, useEffect } from "react";

import { useAuth } from "../../../../components/AuthContext";
import { useErrorHandlingContext } from "../../../../components/ErrorHandlingContext";
import { useForm } from "../../../../hooks/useForm";
import { updateDonationBar } from "../../../../services/overlays/donationBar";
import {
  DonationBar,
  DonationBarFormData,
} from "../../../../types/donationBar";
import { TextStyles } from "../../../../types/style";
import { useEditorContext } from "../../Context";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Section,
  SectionContent,
  SectionRow,
} from "../styles";
import BorderParameters from "./BorderParameters";
import CursorParameters from "./CursorParameters";
import GlobalParameters from "./GlobalParameters";
import ReactionParameters from "./ReactionParameters";
import TextParameters from "./TextParameters";

interface DonationBarEditionModalProps {
  data?: DonationBar;
  onClose: () => void;
}

const formatFormData = (formData: { [x: string]: string | TextStyles[] }) => {
  return Object.entries(formData).reduce((variationData, [key, value]) => {
    const path = key.replaceAll("Ref", "").split("_");

    const newVariation = set(variationData, path, value || "");

    return newVariation;
  }, {}) as DonationBar;
};

const isObject = (variable: any) => {
  return Object.prototype.toString.call(variable) === "[object Object]";
};

const formatVariation = (variation: DonationBar | null) => {
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

const DonationBarEditionModal = ({
  data,
  onClose,
}: DonationBarEditionModalProps) => {
  const [formData, setFormData] = useForm<DonationBarFormData>({});
  const { herotag } = useAuth();
  const { overlay, getOverlayData } = useEditorContext();
  const { handleError } = useErrorHandlingContext();

  useEffect(() => {
    setFormData({ value: formatVariation(data || null) });
  }, [setFormData, data]);

  const handleClick = useCallback(async () => {
    const newSnapshot = formatFormData(omit(formData, "_id"));

    if (data?._id && updateDonationBar) {
      try {
        if (overlay?._id && herotag) {
          await updateDonationBar(herotag, overlay?._id, {
            ...newSnapshot,
            _id: data._id,
          });

          await getOverlayData();

          onClose();
        }
      } catch (error) {
        handleError(error.message);
      }
    }
  }, [
    onClose,
    data,
    formData,
    getOverlayData,
    handleError,
    herotag,
    overlay?._id,
  ]);

  const handleOnChange = useCallback(
    (event) => {
      setFormData(event);
    },
    [setFormData]
  );

  return (
    <Modal open onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Save
          </Button>
        </ModalHeader>

        <GlobalParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></GlobalParameters>

        <BorderParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></BorderParameters>

        <CursorParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></CursorParameters>

        <ReactionParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></ReactionParameters>

        <TextParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></TextParameters>

        <Section>
          <SectionContent>
            <SectionRow>
              <Button variant="contained" color="secondary">
                Remove Donation Bar
              </Button>
            </SectionRow>
          </SectionContent>
        </Section>
      </ModalContent>
    </Modal>
  );
};

export default DonationBarEditionModal;

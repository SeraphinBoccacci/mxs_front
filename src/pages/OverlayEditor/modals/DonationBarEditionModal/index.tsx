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
  DonationBarLenses,
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
import DescriptionParameters from "./DescriptionParameters";
import DisplayParameters from "./DisplayParameters";
import GlobalParameters from "./GlobalParameters";
import ReactionParameters from "./ReactionParameters";
import SubPartParameters from "./SubPartParameters";
import TextParameters from "./TextParameters";

interface DonationBarEditionModalProps {
  donationBarData?: DonationBar;
  onClose: () => void;
  isOpen: boolean;
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
  isOpen,
  donationBarData,

  onClose,
}: DonationBarEditionModalProps) => {
  const [formData, setFormData] = useForm<DonationBarFormData>({});
  const { herotag } = useAuth();
  const { overlay, getOverlayData } = useEditorContext();
  const { handleError } = useErrorHandlingContext();

  useEffect(() => {
    setFormData({ value: formatVariation(donationBarData || null) });
  }, [setFormData, donationBarData]);

  const handleClick = useCallback(async () => {
    const newSnapshot = formatFormData(omit(formData, "_id"));

    if (donationBarData?._id && updateDonationBar) {
      try {
        if (overlay?._id && herotag) {
          await updateDonationBar(herotag, overlay?._id, {
            ...newSnapshot,
            _id: donationBarData._id,
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
    donationBarData,
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
    <Modal
      open={!!donationBarData && !!updateDonationBar && isOpen}
      onClose={onClose}
    >
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

        <DisplayParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></DisplayParameters>

        <SubPartParameters
          title="Amount sent part"
          handleOnChange={handleOnChange}
          formData={formData}
          colorLense={DonationBarLenses.sentAmountPart_color}
        ></SubPartParameters>

        <SubPartParameters
          title="Amount left to send part"
          handleOnChange={handleOnChange}
          formData={formData}
          colorLense={DonationBarLenses.amountToSendPart_color}
        ></SubPartParameters>

        <CursorParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></CursorParameters>

        <BorderParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></BorderParameters>

        <ReactionParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></ReactionParameters>

        <DescriptionParameters
          handleOnChange={handleOnChange}
          formData={formData}
        ></DescriptionParameters>

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

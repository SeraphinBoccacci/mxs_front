import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React, { useCallback, useContext, useState } from "react";

import { colors } from "../../../../../constants/colors";
import {
  createVariation,
  deleteVariation,
} from "../../../../../services/streamElements";
import { invertColor } from "../../../../../utils/color";
import { AuthContext } from "../../../../AuthContext";
import { Variation } from "../../interface";
import { VariationsFiles } from "..";
import {
  NewVariationButton,
  VariationHeader,
  VariationLargeContent,
  VariationList,
  VariationListContainer,
  VariationListItem,
  VariationMediumContent,
  VariationsContainer,
  VariationSmallContent,
} from "./style";

const generateRandomVariationName = (variations: Variation[]): Variation => {
  const leftColors = colors.filter(
    ({ label }) => !variations.some((variation) => variation.name === label)
  );

  const colorsCount = leftColors.length;

  const randomIndex = Math.floor(Math.random() * colorsCount);

  const color = leftColors[randomIndex];

  return {
    name: `variation ${color.label.split(" ").join("_").toLowerCase()}`,
    backgroundColor: color.value,
  };
};

interface VariationsListProps {
  htmlSrc?: string;
  variations: Variation[];
  setFiles: React.Dispatch<React.SetStateAction<VariationsFiles | undefined>>;
  setHtmlSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
  setVariations: React.Dispatch<React.SetStateAction<Variation[]>>;
  setFocusedVariationIndex: (index: number) => void;
}

export const VariationsList = ({
  htmlSrc,
  variations,
  setFiles,
  setHtmlSrc,
  setVariations,
  setFocusedVariationIndex,
}: VariationsListProps) => {
  const { herotag } = useContext(AuthContext);
  const [
    displayedVariationIndex,
    setDisplayedVariationIndex,
  ] = useState<number>();

  const addNewVariation = useCallback(async () => {
    const newVariation = generateRandomVariationName(variations);

    const { variations: updatedVariations, files } = await createVariation(
      herotag as string,
      newVariation
    );

    setVariations(updatedVariations);
    setFiles(files);
  }, [variations]);

  const removeVariation = useCallback(
    async (index: number) => {
      const { variations: updatedVariations, files } = await deleteVariation(
        variations[index]._id as string
      );

      setVariations(updatedVariations);
      setFiles(files);
    },
    [variations]
  );

  const displayPreview = (variation: Variation, variationIndex: number) => {
    setHtmlSrc(
      `http://localhost:4000/files/html/file-name/${variation.filepath}`
    );
    setDisplayedVariationIndex(variationIndex);
    setTimeout(() => {
      setHtmlSrc("");
      setDisplayedVariationIndex(undefined);
    }, (variation.duration || 0) * 1000);
  };

  const stopPreview = () => {
    setHtmlSrc("");
    setDisplayedVariationIndex(undefined);
  };

  return (
    <VariationsContainer>
      <VariationListContainer>
        <VariationHeader>
          <VariationLargeContent>Variation Name</VariationLargeContent>
          <VariationMediumContent>Required Amount</VariationMediumContent>
          <VariationMediumContent>Chances</VariationMediumContent>
          <VariationSmallContent></VariationSmallContent>
          <VariationSmallContent></VariationSmallContent>
          <VariationSmallContent></VariationSmallContent>
        </VariationHeader>
        <VariationList>
          {variations.map((variation, index) => (
            <VariationListItem
              background={variation.backgroundColor}
              key={`variation-${index}`}
            >
              <VariationLargeContent>{variation.name}</VariationLargeContent>
              <VariationMediumContent>
                {variation.requiredAmount || "-"}
              </VariationMediumContent>
              <VariationMediumContent>
                {variation.chances || "-"}
              </VariationMediumContent>
              <VariationSmallContent>
                {displayedVariationIndex === index ? (
                  <Button size="small" onClick={() => stopPreview()}>
                    <StopRoundedIcon
                      style={{
                        color: invertColor(variation.backgroundColor),
                      }}
                    ></StopRoundedIcon>
                  </Button>
                ) : (
                  <Button
                    disabled={!!htmlSrc || !variation.filepath}
                    size="small"
                    onClick={() => {
                      displayPreview(variation, index);
                    }}
                  >
                    <PlayArrowRoundedIcon
                      style={{
                        color: invertColor(variation.backgroundColor),
                      }}
                    ></PlayArrowRoundedIcon>
                  </Button>
                )}
              </VariationSmallContent>
              <VariationSmallContent>
                <Button
                  size="small"
                  onClick={() => {
                    setFocusedVariationIndex(index);
                  }}
                >
                  <EditRoundedIcon
                    style={{
                      color: invertColor(variation.backgroundColor),
                    }}
                  ></EditRoundedIcon>
                </Button>
              </VariationSmallContent>
              <VariationSmallContent>
                <Button size="small" onClick={() => removeVariation(index)}>
                  <DeleteRoundedIcon
                    style={{
                      color: invertColor(variation.backgroundColor),
                    }}
                  ></DeleteRoundedIcon>
                </Button>
              </VariationSmallContent>
            </VariationListItem>
          ))}
        </VariationList>
      </VariationListContainer>
      <NewVariationButton
        onClick={addNewVariation}
        color="secondary"
        variant="contained"
        size="small"
      >
        Add Variation
      </NewVariationButton>
    </VariationsContainer>
  );
};

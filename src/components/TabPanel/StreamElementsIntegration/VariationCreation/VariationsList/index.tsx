import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React, { useCallback, useContext, useEffect } from "react";

import { colors } from "../../../../../constants/colors";
import {
  createVariation,
  deleteVariation,
} from "../../../../../services/streamElements";
import { invertColor } from "../../../../../utils/color";
import { AuthContext } from "../../../../AuthContext";
import { generateCss } from "../../codeSnippets/custom/css";
import { mainLines } from "../../codeSnippets/custom/javascript";
import { Variation } from "../../interface";
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

const HTML = (variation: Variation) => `
  <html>
    <style>
      ${generateCss([variation])}
    </style>
    <body></body>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.1/socket.io.js"></script>
    <script type="text/javascript">
    ${mainLines("test_herotag", [variation], {
      triggerMode: "manual",
      targetVariation: variation.name,
    })}
    </script>
  </html>
`;

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
  variations: Variation[];
  setVariations: React.Dispatch<React.SetStateAction<Variation[]>>;
  setFocusedVariationIndex: (index: number) => void;
  setHtml: React.Dispatch<React.SetStateAction<string | undefined>>;
  html?: string;
}

export const VariationsList = ({
  variations,
  setVariations,
  setFocusedVariationIndex,
  setHtml,
  html,
}: VariationsListProps) => {
  const { user, herotag } = useContext(AuthContext);

  useEffect(() => {
    setVariations(user?.integrations?.streamElements?.variations || []);
  }, [user]);

  const addNewVariation = useCallback(async () => {
    const newVariation = generateRandomVariationName(variations);

    const variation = await createVariation(herotag as string, newVariation);

    if (variation)
      setVariations((prevVariations: Variation[]) => [
        ...prevVariations,
        variation,
      ]);
  }, [variations]);

  const removeVariation = useCallback(
    async (index: number) => {
      const before = variations.slice(0, index);
      const after = variations.slice(index + 1, variations.length);

      if (variations?.[index]?._id) {
        await deleteVariation(variations[index]._id as string);

        setVariations([...before, ...after]);
      }
    },
    [variations]
  );

  const displayPreview = (variation: Variation) => {
    setHtml(HTML(variation));
    setTimeout(() => {
      setHtml("");
    }, (variation.duration || 0) * 1000);
  };

  const stopPreview = () => {
    setHtml("");
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
                {!!html ? (
                  <Button size="small" onClick={() => stopPreview()}>
                    <StopRoundedIcon
                      style={{
                        color: invertColor(variation.backgroundColor),
                      }}
                    ></StopRoundedIcon>
                  </Button>
                ) : (
                  <Button
                    size="small"
                    onClick={() => {
                      displayPreview(variation);
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

import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import { debounce } from "lodash";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import config from "../../../../../config/config";
import { colors } from "../../../../../constants/colors";
import {
  createVariation,
  deleteVariation,
  getRowsStructure,
  updateRowsStructure,
} from "../../../../../services/streamElements";
import { invertColor } from "../../../../../utils/color";
import { AuthContext } from "../../../../AuthContext";
import Table from "../../../../Table";
import { isRowNest, Row, RowNest } from "../../../../Table/TableRow";
import { Variation } from "../../interface";
import { VariationsFiles } from "..";
import { columns } from "./columns";
import { resolveUpdatedRowsGroups } from "./row-structures";
import {
  NewVariationButton,
  TopButton,
  TopButtonContainer,
  VariationsContainer,
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
  const [selectedRows, setSelectedRows] = useState<Row[]>([]);
  const [isOnGatheringMode, setIsOnGatheringMode] = useState<boolean>(false);
  const [formattedRows, setFormatedRows] = useState<(Row | RowNest)[]>([]);

  const addNewVariation = useCallback(async () => {
    const newVariation = generateRandomVariationName(variations);

    const { variations: updatedVariations, files } = await createVariation(
      herotag as string,
      newVariation
    );

    setVariations(updatedVariations);
    setFiles(files);
  }, [herotag, variations, setFiles, setVariations]);

  const removeVariation = useCallback(
    async (index: number) => {
      const { variations: updatedVariations, files } = await deleteVariation(
        variations[index]._id as string
      );

      setVariations(updatedVariations);
      setFiles(files);
    },
    [variations, setFiles, setVariations]
  );

  const updateHeaderText = useCallback(
    (
      targetIndex: number,
      rowsStructure: {
        rows: string[];
        rowsGroupName?: string | undefined;
      }[],
      herotag: string
    ) =>
      debounce(async (updatedHeaderText: string) => {
        const before = rowsStructure.slice(0, targetIndex);
        const after = rowsStructure.slice(
          targetIndex + 1,
          rowsStructure.length
        );

        const update = [
          ...before,
          {
            ...rowsStructure[targetIndex],
            rowsGroupName: updatedHeaderText,
          },
          ...after,
        ];

        await updateRowsStructure(herotag, update);
      }, 1000),
    []
  );

  const displayPreview = useCallback(
    (variation: Variation) => {
      setHtmlSrc(`${config.url}/files/html/file-name/${variation.filepath}`);
      setTimeout(() => {
        setHtmlSrc("");
      }, (variation.duration || 0) * 1000);
    },
    [setHtmlSrc]
  );

  const rows = useCallback(
    (variations: Variation[]) =>
      variations
        .map((variation, variationIndex) => ({
          id: variation._id as string,
          style: {
            backgroundColor: variation.backgroundColor,
            color: invertColor(variation.backgroundColor),
          },
          variationName: variation.name,
          requiredAmount: variation.requiredAmount,
          chances: variation.chances,
          preview: (
            <Button
              disabled={!!htmlSrc || !variation.filepath}
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
          ),
          edit: (
            <Button
              size="small"
              onClick={() => {
                setFocusedVariationIndex(variationIndex);
              }}
            >
              <EditRoundedIcon
                style={{
                  color: invertColor(variation.backgroundColor),
                }}
              ></EditRoundedIcon>
            </Button>
          ),
          delete: (
            <Button
              size="small"
              onClick={() => {
                removeVariation(variationIndex);
              }}
            >
              <DeleteRoundedIcon
                style={{
                  color: invertColor(variation.backgroundColor),
                }}
              ></DeleteRoundedIcon>
            </Button>
          ),
        }))
        .filter((id) => Boolean(id)),
    [removeVariation, setFocusedVariationIndex, displayPreview, htmlSrc]
  );

  useEffect(() => {
    if (!herotag) return;

    getRowsStructure(herotag).then((rowsStructure) => {
      const rowsFromVariations = rows(variations);

      if (!rowsStructure) {
        setFormatedRows(rowsFromVariations);

        return;
      }

      const structuredRows = rowsStructure.map(
        ({ rows, rowsGroupName }, rowIndex) => ({
          headerText: rowsGroupName,
          onHeaderTextChange: updateHeaderText(
            rowIndex,
            rowsStructure,
            herotag
          ),
          rows: rows
            .map((nestedRowId) =>
              rowsFromVariations.find(({ id }) => id === nestedRowId)
            )
            .filter(Boolean),
        })
      );

      const structuredRowsWithNotRegisteredOnes = [
        // Structure from server
        ...structuredRows,
        // Rows below are not part of any group
        ...rowsFromVariations.filter(
          (row) =>
            !structuredRows.some((structuredRow) =>
              structuredRow.rows.some(
                (nestedStructuredRow) =>
                  nestedStructuredRow?.variationName === row.variationName
              )
            )
        ),
      ] as (Row | RowNest)[];

      setFormatedRows(structuredRowsWithNotRegisteredOnes);
    });
  }, [variations, herotag, setFormatedRows, updateHeaderText, rows]);

  const rowsGroups: RowNest[] = useMemo(() => formattedRows.filter(isRowNest), [
    formattedRows,
  ]);
  const selectedRowsIds = useMemo(() => selectedRows.map(({ id }) => id), [
    selectedRows,
  ]);

  const isAlreadyInRowGroup = useCallback(
    (rowId: string) =>
      rowsGroups.some(({ rows }) => rows.map(({ id }) => id).includes(rowId)),
    [rowsGroups]
  );

  const hasSomeRowsAlreadyGathered = useMemo(
    () => selectedRowsIds.some(isAlreadyInRowGroup),
    [selectedRowsIds, isAlreadyInRowGroup]
  );
  const hasAllRowsAlreadyGathered = useMemo(
    () => selectedRowsIds.every(isAlreadyInRowGroup),
    [selectedRowsIds, isAlreadyInRowGroup]
  );

  const hasNoRowAlreadyGathered = !hasSomeRowsAlreadyGathered;

  const getHasRowsFromDifferentGroupsToGather = useCallback((): boolean => {
    if (hasNoRowAlreadyGathered) return false;

    const firstRowsGroupIndex = rowsGroups.findIndex(({ rows }) =>
      rows.some(({ id }) => selectedRowsIds.includes(id))
    );

    const secondRowsGroupIndex = rowsGroups.findIndex(
      ({ rows }, rowsGroupIndex) =>
        rows.some(({ id }) => selectedRowsIds.includes(id)) &&
        rowsGroupIndex !== firstRowsGroupIndex
    );

    return firstRowsGroupIndex > -1 && secondRowsGroupIndex > -1;
  }, [hasNoRowAlreadyGathered, rowsGroups, selectedRowsIds]);

  const hasRowsFromDifferentGroupsToGather = useMemo(
    () => getHasRowsFromDifferentGroupsToGather(),
    [getHasRowsFromDifferentGroupsToGather]
  );

  const gatherRows = useCallback(
    async (rowsSelection: Row[]) => {
      const rowsFromVariations = rows(variations);
      const updatedRowsGroups = resolveUpdatedRowsGroups(
        formattedRows,
        rowsSelection,
        rowsGroups,
        herotag as string,
        {
          hasSomeRowsAlreadyGathered,
          hasAllRowsAlreadyGathered,
          hasNoRowAlreadyGathered,
          hasRowsFromDifferentGroupsToGather,
        }
      );

      const formattedUpdates = updatedRowsGroups.map(
        ({ headerText, rows }) => ({
          rowsGroupName: headerText as string,
          rows: rows.map(({ id }) => id),
        })
      );

      const updatedRows = [
        ...(updatedRowsGroups.map((rowNest, rowIndex) => ({
          ...rowNest,
          onHeaderTextChange: updateHeaderText(
            rowIndex,
            formattedUpdates,
            herotag as string
          ),
        })) as RowNest[]),
        ...rowsFromVariations.filter(
          (row) =>
            !updatedRowsGroups.some((updatedRowsGroup) =>
              updatedRowsGroup?.rows?.some(
                (nestedRow) => nestedRow?.variationName === row.variationName
              )
            )
        ),
      ];

      setFormatedRows(updatedRows);
      await updateRowsStructure(herotag as string, formattedUpdates);
    },
    [
      herotag,
      variations,
      setFormatedRows,
      formattedRows,
      rowsGroups,
      hasSomeRowsAlreadyGathered,
      hasAllRowsAlreadyGathered,
      hasNoRowAlreadyGathered,
      hasRowsFromDifferentGroupsToGather,
      updateHeaderText,
      rows,
    ]
  );

  const buttonText = useMemo(() => {
    if (hasSomeRowsAlreadyGathered && !hasAllRowsAlreadyGathered)
      return "Merge selection in group";

    if (hasAllRowsAlreadyGathered && !hasRowsFromDifferentGroupsToGather)
      return "Remove selection from group";

    if (hasNoRowAlreadyGathered) return "Gather selection";

    if (hasRowsFromDifferentGroupsToGather)
      return "Can't gather rows from two groups";

    return "Gather";
  }, [
    hasSomeRowsAlreadyGathered,
    hasAllRowsAlreadyGathered,
    hasNoRowAlreadyGathered,
    hasRowsFromDifferentGroupsToGather,
  ]);

  return (
    <VariationsContainer>
      <TopButtonContainer>
        {isOnGatheringMode && selectedRows.length ? (
          <TopButton
            disabled={hasRowsFromDifferentGroupsToGather}
            variant="contained"
            onClick={() => {
              gatherRows(selectedRows);
              setSelectedRows([]);
            }}
          >
            {<span>{buttonText}</span>}
          </TopButton>
        ) : null}
        <TopButton
          variant="outlined"
          onClick={() => setIsOnGatheringMode((prev) => !prev)}
        >
          {isOnGatheringMode ? (
            <span>Cancel</span>
          ) : (
            <span>Gathering Mode</span>
          )}
        </TopButton>
      </TopButtonContainer>

      <Table
        selectedRows={selectedRows}
        isSelectable={isOnGatheringMode}
        onSelect={(rows: Row[]) =>
          setSelectedRows(rows.flatMap((nestedRows) => nestedRows))
        }
        columns={columns}
        rows={formattedRows}
      ></Table>
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

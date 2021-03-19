import { partition } from "lodash";

import { Row, RowNest } from "../../../../Table/TableBody/TableRow";

export const resolveUpdatedRowsGroups = (
  formattedRows: (Row | RowNest)[],
  selectedRows: Row[],
  rowsGroups: RowNest[],
  herotag: string,
  {
    hasSomeRowsAlreadyGathered,
    hasAllRowsAlreadyGathered,
    hasNoRowAlreadyGathered,
    hasRowsFromDifferentGroupsToGather,
  }: { [key: string]: boolean }
): RowNest[] => {
  const selectedRowsIds = selectedRows.map(({ id }) => id);

  if (hasNoRowAlreadyGathered)
    return [
      {
        headerText: "",
        rows: selectedRows,
        id: "",
      },
      ...rowsGroups,
    ];

  const [involvedGroups, notInvolvedGroups] = partition(
    rowsGroups,
    ({ rows }) => rows.some(({ id }) => selectedRowsIds.includes(id))
  );

  if (involvedGroups.length !== 1) return rowsGroups;

  const [involvedGroup] = involvedGroups;

  if (hasSomeRowsAlreadyGathered && !hasAllRowsAlreadyGathered) {
    const rowsNotYetInInvolvedGroup = selectedRowsIds.filter(
      (rowId) => !involvedGroup.rows.map(({ id }) => id).includes(rowId)
    );

    const updatedInvolvedGroup: RowNest = {
      ...involvedGroup,
      rows: [
        ...involvedGroup.rows,
        ...(formattedRows as Row[]).filter((row) =>
          rowsNotYetInInvolvedGroup.includes((row as Row).id)
        ),
      ],
    };

    return [updatedInvolvedGroup, ...notInvolvedGroups];
  }

  if (hasAllRowsAlreadyGathered && !hasRowsFromDifferentGroupsToGather) {
    const rowsToKeepInGroup = partition(involvedGroup.rows, (row) =>
      selectedRowsIds.includes((row as Row).id)
    )[1];

    return [
      ...(rowsToKeepInGroup.length
        ? [{ ...involvedGroup, rows: rowsToKeepInGroup }]
        : []),
      ...notInvolvedGroups,
    ];
  }

  return rowsGroups;
};

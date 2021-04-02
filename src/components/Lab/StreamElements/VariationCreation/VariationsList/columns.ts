import { Column } from "../../../../Table";

export const columns: Column[] = [
  { id: "variationName", label: "Variation Name", width: 40, align: "left" },
  {
    id: "requiredAmount",
    label: "Required Amount",
    width: 25,
    align: "center",
  },
  {
    id: "chances",
    label: "Apparition Probability",
    width: 25,
    align: "center",
  },
  {
    id: "preview",
    label: "",
    filterable: false,
    sortable: false,
    width: 5,
    align: "center",
  },
  {
    id: "edit",
    label: "",
    filterable: false,
    sortable: false,
    width: 5,
    align: "center",
  },
  {
    id: "delete",
    label: "",
    filterable: false,
    sortable: false,
    width: 5,
    align: "center",
  },
];

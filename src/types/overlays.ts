import { AlertVariation } from "./alerts";

export interface WidgetVariation {
  _id: string;
  name: string;
  backgroundColor: string;
  chances?: number;
  requiredAmount?: number;
}

export enum VariationGroupKinds {
  DEFAULT = "DEFAULT",
  CUSTOM = "CUSTOM",
}

export interface VariationGroup {
  title: string;
  _id: string;
  variationsIds: string[];
  kind: VariationGroupKinds;
}

export interface OverlayData {
  _id: string;
  isActive: boolean;
  rowsStructure?: {
    rows: string[];
    rowsGroupName?: string | undefined;
  }[];
  generatedLink: string;
  alerts: {
    variations: AlertVariation[];
    groups: VariationGroup[];
  };
}

import { AlertVariation } from "./alerts";
import { DonationBar } from "./donationBar";

export enum WidgetsKinds {
  "ALERTS" = "ALERTS",
  "DONATION_BAR" = "DONATION_BAR",
}

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
  _id: string;
  title: string;
  variationsIds: string[];
  kind: VariationGroupKinds;
}

export interface OverlayData {
  _id: string;
  isActive: boolean;
  name: string;
  color: string;
  rowsStructure?: {
    rows: string[];
    rowsGroupName?: string | undefined;
  }[];
  generatedLink: string;
  alerts: {
    variations: AlertVariation[];
    groups: VariationGroup[];
  };
  donationBar?: DonationBar;
}

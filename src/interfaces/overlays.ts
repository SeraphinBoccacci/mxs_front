import { AlertVariation } from "./alerts";

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

export interface OverlaysData {
  _id: string;
  generatedLink: string;
  alerts: {
    variations: AlertVariation[];
    groups: VariationGroup[];
  };
  // donationBar: { type: String, required: false },
  // particlesFalls: {
  //   variations: { type: String, required: false },
  //   structure: { type: String, required: false },
  // },
  // topDonators: { type: String, required: false },
}

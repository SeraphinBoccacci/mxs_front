import React from "react";

import {
  VariationGroup,
  WidgetsKinds,
  WidgetVariation,
} from "../../../../types/overlays";
import Panel from "./Panel";
import WidgetVariationsContextProvider from "./WidgetVariationsContext";

interface WidgetEditorProps {
  overlayId: string;
  variations: WidgetVariation[];
  widgetKind: WidgetsKinds;
  createVariation: (
    herotag: string,
    overlayId: string,
    newVariation: WidgetVariation
  ) => Promise<void>;
  updateVariation: (
    herotag: string,
    overlayId: string,
    payload: WidgetVariation
  ) => Promise<void>;
  deleteVariation: (
    herotag: string,
    overlayId: string,
    variationId: string
  ) => Promise<void>;
  createVariationsGroup: (herotag: string, overlayId: string) => Promise<void>;
  updateVariationsGroup: (
    herotag: string,
    overlayId: string,
    groups: VariationGroup[]
  ) => Promise<void>;
  deleteVariationsGroup: (
    herotag: string,
    overlayId: string,
    groupId: string
  ) => Promise<void>;
}

const WidgetEditor = ({
  overlayId,
  variations = [],
  widgetKind,
  createVariation,
  updateVariation,
  deleteVariation,
  createVariationsGroup,
  updateVariationsGroup,
  deleteVariationsGroup,
}: WidgetEditorProps) => {
  return (
    <WidgetVariationsContextProvider
      overlayId={overlayId}
      variations={variations}
      widgetKind={widgetKind}
      createVariation={createVariation}
      updateVariation={updateVariation}
      deleteVariation={deleteVariation}
      createVariationsGroup={createVariationsGroup}
      updateVariationsGroup={updateVariationsGroup}
      deleteVariationsGroup={deleteVariationsGroup}
    >
      <Panel></Panel>
    </WidgetVariationsContextProvider>
  );
};

export default WidgetEditor;

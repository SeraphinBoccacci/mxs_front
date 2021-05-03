import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from "react";

import { useAuth } from "../../../../../components/AuthContext";
import { useErrorHandlingContext } from "../../../../../components/ErrorHandlingContext";
import { colors } from "../../../../../constants/colors";
import { WidgetsKinds } from "../../../../../services/overlays";
import { VariationGroup, WidgetVariation } from "../../../../../types/overlays";
import { useEditorContext } from "../../../Context";

interface ContextProps {
  variations: WidgetVariation[];
  widgetKind?: WidgetsKinds;
  createVariation: () => Promise<void>;
  updateVariation: (
    herotag: string,
    overlayId: string,
    payload: WidgetVariation
  ) => Promise<void>;
  deleteVariation: (variationId: string) => Promise<void>;
  createVariationsGroup: () => Promise<void>;
  updateVariationsGroup: (updatedGroups: VariationGroup[]) => Promise<void>;
  deleteVariationsGroup: (variationGroupId: string) => Promise<void>;
}

const Context = createContext<ContextProps>({
  variations: [],
  createVariation: async () => {},
  updateVariation: async () => {},
  deleteVariation: async () => {},
  createVariationsGroup: async () => {},
  updateVariationsGroup: async () => {},
  deleteVariationsGroup: async () => {},
});

interface WidgetVariationsContextProviderProps {
  children: ReactNode;
  variations: WidgetVariation[];
  overlayId: string;
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

const generateRandomVariationName = (
  variations: WidgetVariation[]
): WidgetVariation => {
  const leftColors = colors.filter(
    ({ label }) => !variations.some((variation) => variation.name === label)
  );

  const colorsCount = leftColors.length;

  const randomIndex = Math.floor(Math.random() * colorsCount);

  const color = leftColors[randomIndex];

  return {
    name: `variation ${color.label.split(" ").join("_").toLowerCase()}`,
    backgroundColor: color.value,
  } as WidgetVariation;
};

const WidgetVariationsContextProvider = ({
  children,
  variations,
  overlayId,
  widgetKind,
  createVariation,
  updateVariation,
  deleteVariation,
  createVariationsGroup,
  updateVariationsGroup,
  deleteVariationsGroup,
}: WidgetVariationsContextProviderProps) => {
  const { getOverlayData } = useEditorContext();
  const { herotag } = useAuth();
  const { handleError } = useErrorHandlingContext();

  const handleCreateAlertVariation = useCallback(async () => {
    try {
      if (herotag) {
        const newVariation = generateRandomVariationName(variations);

        await createVariation(herotag, overlayId, newVariation);

        await getOverlayData();
      }
    } catch (error) {
      handleError(error.message);
    }
  }, [
    herotag,
    getOverlayData,
    handleError,
    variations,
    overlayId,
    createVariation,
  ]);

  const handleDeleteVariation = useCallback(
    async (variationId) => {
      try {
        if (herotag) {
          await deleteVariation(herotag, overlayId, variationId);

          getOverlayData();
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [deleteVariation, getOverlayData, herotag, overlayId, handleError]
  );

  const handleCreateVariationsGroup = useCallback(async () => {
    try {
      if (herotag) {
        await createVariationsGroup(herotag, overlayId);

        await getOverlayData();
      }
    } catch (error) {
      handleError(error.message);
    }
  }, [herotag, getOverlayData, handleError, overlayId, createVariationsGroup]);

  const handleUpdateVariationsGroup = useCallback(
    async (variationsGroup: VariationGroup[]) => {
      try {
        if (herotag) {
          await updateVariationsGroup(herotag, overlayId, variationsGroup);
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [herotag, handleError, overlayId, updateVariationsGroup]
  );

  const handleDeleteVariationsGroup = useCallback(
    async (variationGroupId: string) => {
      try {
        if (herotag) {
          await deleteVariationsGroup(herotag, overlayId, variationGroupId);

          await getOverlayData();
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [getOverlayData, herotag, handleError, deleteVariationsGroup, overlayId]
  );

  return (
    <Context.Provider
      value={{
        variations,
        widgetKind,
        createVariation: handleCreateAlertVariation,
        updateVariation,
        deleteVariation: handleDeleteVariation,
        createVariationsGroup: handleCreateVariationsGroup,
        updateVariationsGroup: handleUpdateVariationsGroup,
        deleteVariationsGroup: handleDeleteVariationsGroup,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useWidgetVariationsContext = () => useContext(Context);
export default WidgetVariationsContextProvider;

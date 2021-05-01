import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router";

import { useErrorHandlingContext } from "../../../components/ErrorHandlingContext";
import LoadingScreen from "../../../components/LoadingScreen";
import { useQueryString } from "../../../hooks/useQueryString";
import {
  getUserOverlay,
  updateAlertVariation,
  WidgetsKinds,
} from "../../../services/overlays";
import { Alerts, AlertVariation } from "../../../types/alerts";
import { OverlayData, VariationGroup } from "../../../types/overlays";
import AlertVariationEditionModal from "../AlertVariationEditionModal";

interface WidgetToDisplayData {
  widgetKind: WidgetsKinds;
  widget: AlertVariation;
}

interface ContextProps {
  isAddWidgetOpenned: boolean;
  setIsAddWidgetOpenned: Dispatch<SetStateAction<boolean>>;
  selectedWidget: WidgetsKinds | null;
  setSelectedWidget: Dispatch<SetStateAction<WidgetsKinds | null>>;
  widgetData: Alerts | null;
  setWidgetData: Dispatch<SetStateAction<Alerts | null>>;
  hasAtLeastOneWidget: boolean;
  overlay?: OverlayData;
  getOverlayData: () => Promise<void>;
  groups: VariationGroup[];
  setGroups: Dispatch<SetStateAction<VariationGroup[]>>;
  handleFocusOnVariation: (variation: AlertVariation) => void;
  updateVariation: (updatedVariation: AlertVariation) => void;
  toggleWidgetVisibility: (widgetId: string) => void;
  hiddenWidgets: string[];
  widgetToDisplayData?: WidgetToDisplayData;
  displayWidget: (widgetKind: WidgetsKinds, widget: AlertVariation) => void;
}

const Context = createContext<ContextProps>({
  isAddWidgetOpenned: false,
  setIsAddWidgetOpenned: () => {},
  selectedWidget: null,
  setSelectedWidget: () => {},
  widgetData: null,
  setWidgetData: () => {},
  hasAtLeastOneWidget: false,
  getOverlayData: async () => {},
  groups: [],
  setGroups: () => {},
  handleFocusOnVariation: () => {},
  updateVariation: () => {},
  toggleWidgetVisibility: () => {},
  hiddenWidgets: [],
  displayWidget: () => {},
});

interface EditorContextProviderProps {
  children: ReactNode;
}

const EditorContextProvider = ({ children }: EditorContextProviderProps) => {
  const [isAddWidgetOpenned, setIsAddWidgetOpenned] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState<WidgetsKinds | null>(
    null
  );
  const [hiddenWidgets, setHiddenWidgets] = useState<string[]>([]);
  const [widgetData, setWidgetData] = useState<Alerts | null>(null);
  const [overlay, setOverlay] = useState<OverlayData>();
  const [groups, setGroups] = useState<VariationGroup[]>([]);
  const [
    widgetToDisplayData,
    setWidgetToDisplayData,
  ] = useState<WidgetToDisplayData>();
  const [focusedVariation, setFocusedVariation] = useState<AlertVariation>();
  const [herotag] = useQueryString("herotag");
  const { overlayId } = useParams<{ overlayId: string }>();
  const { handleError } = useErrorHandlingContext();

  const getOverlayData = useCallback(async () => {
    const overlay = await getUserOverlay(herotag, overlayId);

    if (overlay) {
      setOverlay(overlay);

      setGroups(overlay?.alerts?.groups || []);
    }
  }, [herotag, overlayId, setOverlay]);

  useEffect(() => {
    getOverlayData();
  }, [getOverlayData]);

  const updateVariation = useCallback(
    async (updatedVariation: AlertVariation) => {
      try {
        if (overlay?._id)
          await updateAlertVariation(herotag, overlay?._id, updatedVariation);

        await getOverlayData();
      } catch (error) {
        handleError(error.message);
      }
    },
    [getOverlayData, handleError, herotag, overlay?._id]
  );

  const handleFocusOnVariation = useCallback(
    (variation: AlertVariation) => {
      setFocusedVariation(variation);
    },
    [setFocusedVariation]
  );

  const handleClose = useCallback(() => {
    setFocusedVariation(undefined);
  }, [setFocusedVariation]);

  const toggleWidgetVisibility = useCallback(
    (widgetId: string) => {
      setHiddenWidgets((prev) => {
        if (prev.some((id) => id === widgetId)) {
          return prev.filter((id) => id !== widgetId);
        } else {
          return [...prev, widgetId];
        }
      });
    },
    [setHiddenWidgets]
  );

  const displayWidget = useCallback(
    (widgetKind: WidgetsKinds, widget: AlertVariation) => {
      if (widgetKind === WidgetsKinds.ALERTS) {
        const selected = selectedWidget;

        const alertDuration = 2500 + (widget.duration || 1) * 1000;

        setSelectedWidget(null);
        setWidgetToDisplayData(undefined);

        setTimeout(() => {
          setWidgetToDisplayData({ widgetKind, widget });
          setTimeout(() => {
            setWidgetToDisplayData(undefined);
            setSelectedWidget(selected);
          }, alertDuration);
        }, 500);
      }
    },
    [setSelectedWidget, setWidgetToDisplayData, selectedWidget]
  );

  if (!overlay) return <LoadingScreen></LoadingScreen>;

  return (
    <Context.Provider
      value={{
        isAddWidgetOpenned,
        setIsAddWidgetOpenned,
        selectedWidget,
        setSelectedWidget,
        widgetData,
        setWidgetData,
        hasAtLeastOneWidget: !!overlay.alerts,
        overlay,
        getOverlayData,
        groups,
        setGroups,
        handleFocusOnVariation,
        updateVariation,
        toggleWidgetVisibility,
        hiddenWidgets,
        widgetToDisplayData,
        displayWidget,
      }}
    >
      {children}
      <AlertVariationEditionModal
        onClose={handleClose}
        updateVariation={updateVariation}
        variationData={focusedVariation}
      ></AlertVariationEditionModal>
    </Context.Provider>
  );
};

export const useEditorContext = () => useContext(Context);
export default EditorContextProvider;

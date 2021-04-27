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
import { Alerts, AlertVariation } from "../../../interfaces/alerts";
import { OverlaysData, VariationGroup } from "../../../interfaces/overlays";
import {
  getUserOverlay,
  updateAlertVariation,
  WidgetsKinds,
} from "../../../services/overlays";
import VariationModal from "../VariationModal";

interface ContextProps {
  isAddWidgetOpenned: boolean;
  setIsAddWidgetOpenned: Dispatch<SetStateAction<boolean>>;
  selectedWidget: WidgetsKinds | null;
  setSelectedWidget: Dispatch<SetStateAction<WidgetsKinds | null>>;
  widgetData: Alerts | null;
  setWidgetData: Dispatch<SetStateAction<Alerts | null>>;
  hasAtLeastOneWidget: boolean;
  overlay?: OverlaysData;
  getOverlayData: () => void;
  groups: VariationGroup[];
  setGroups: Dispatch<SetStateAction<VariationGroup[]>>;
  handleFocusOnVariation: (variation: AlertVariation) => void;
  updateVariation: (updatedVariation: AlertVariation) => void;
}

const Context = createContext<ContextProps>({
  isAddWidgetOpenned: false,
  setIsAddWidgetOpenned: () => {},
  selectedWidget: null,
  setSelectedWidget: () => {},
  widgetData: null,
  setWidgetData: () => {},
  hasAtLeastOneWidget: false,
  getOverlayData: () => {},
  groups: [],
  setGroups: () => {},
  handleFocusOnVariation: () => {},
  updateVariation: () => {},
});

interface EditorContextProviderProps {
  children: ReactNode;
}

const EditorContextProvider = ({ children }: EditorContextProviderProps) => {
  const [isAddWidgetOpenned, setIsAddWidgetOpenned] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState<WidgetsKinds | null>(
    null
  );
  const [widgetData, setWidgetData] = useState<Alerts | null>(null);
  const [overlay, setOverlay] = useState<OverlaysData>();
  const [groups, setGroups] = useState<VariationGroup[]>([]);
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
      }}
    >
      {children}
      <VariationModal
        onClose={handleClose}
        updateVariation={updateVariation}
        variationData={focusedVariation}
      ></VariationModal>
    </Context.Provider>
  );
};

export const useEditorContext = () => useContext(Context);
export default EditorContextProvider;

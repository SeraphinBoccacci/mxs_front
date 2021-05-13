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

import { useAuth } from "../../../components/AuthContext";
import LoadingScreen from "../../../components/LoadingScreen";
import { getAlertVariation, getUserOverlay } from "../../../services/overlays";
import { Alerts, AlertVariation } from "../../../types/alerts";
import {
  OverlayData,
  VariationGroup,
  WidgetsKinds,
} from "../../../types/overlays";
import AlertVariationEditionModal from "../modals/AlertVariationEditionModal";
import DonationBarEditionModal from "../modals/DonationBarEditionModal";

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
  focusOnVariation: (variation: AlertVariation) => void;
  toggleWidgetVisibility: (widgetId: string) => void;
  hiddenWidgets: string[];
  widgetToDisplayData?: WidgetToDisplayData;
  displayWidget: (widgetKind: WidgetsKinds, widgetId: string) => void;
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
  focusOnVariation: () => {},
  toggleWidgetVisibility: () => {},
  hiddenWidgets: [],
  displayWidget: () => {},
});

interface EditorContextProviderProps {
  children: ReactNode;
}

const EditorContextProvider = ({ children }: EditorContextProviderProps) => {
  const [isAddWidgetOpenned, setIsAddWidgetOpenned] = useState(false);
  const [hiddenWidgets, setHiddenWidgets] = useState<string[]>([]);
  const [widgetData, setWidgetData] = useState<Alerts | null>(null);
  const [overlay, setOverlay] = useState<OverlayData>();
  const [groups, setGroups] = useState<VariationGroup[]>([]);
  const [focusedVariation, setFocusedVariation] = useState<AlertVariation>();

  const [
    selectedWidgetKind,
    setSelectedWidgetKind,
  ] = useState<WidgetsKinds | null>(null);
  const [
    widgetToDisplayData,
    setWidgetToDisplayData,
  ] = useState<WidgetToDisplayData>();

  const { overlayId } = useParams<{ overlayId: string }>();
  const { herotag } = useAuth();

  const getOverlayData = useCallback(async () => {
    if (!herotag) return;

    const overlay = await getUserOverlay(herotag, overlayId);

    if (overlay) {
      setOverlay(overlay);

      setGroups(overlay?.alerts?.groups || []);
    }
  }, [herotag, overlayId, setOverlay]);

  useEffect(() => {
    getOverlayData();
  }, [getOverlayData]);

  const focusOnVariation = useCallback(
    (variation: AlertVariation) => {
      setFocusedVariation(variation);
    },
    [setFocusedVariation]
  );

  const handleClose = useCallback(() => {
    if (selectedWidgetKind === WidgetsKinds.ALERTS) {
      setFocusedVariation(undefined);
    }

    if (selectedWidgetKind === WidgetsKinds.DONATION_BAR) {
      setSelectedWidgetKind(null);
    }
  }, [setFocusedVariation, setSelectedWidgetKind, selectedWidgetKind]);

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
    async (widgetKind: WidgetsKinds, widgetId: string) => {
      if (!herotag || !overlay) return;

      if (widgetKind === WidgetsKinds.ALERTS) {
        const selected = selectedWidgetKind;
        const widget = await getAlertVariation(herotag, overlay._id, widgetId);

        const alertDuration = 1500 + (widget.duration || 1) * 1000;

        setSelectedWidgetKind(null);
        setWidgetToDisplayData(undefined);

        setTimeout(() => {
          setWidgetToDisplayData({ widgetKind, widget });
          setTimeout(() => {
            setWidgetToDisplayData(undefined);
            setSelectedWidgetKind(selected);
          }, alertDuration);
        }, 500);
      }
    },
    [
      setSelectedWidgetKind,
      setWidgetToDisplayData,
      selectedWidgetKind,
      herotag,
      overlay,
    ]
  );

  if (!overlay) return <LoadingScreen></LoadingScreen>;

  return (
    <Context.Provider
      value={{
        isAddWidgetOpenned,
        setIsAddWidgetOpenned,
        selectedWidget: selectedWidgetKind,
        setSelectedWidget: setSelectedWidgetKind,
        widgetData,
        setWidgetData,
        hasAtLeastOneWidget: !!overlay.alerts,
        overlay,
        getOverlayData,
        groups,
        setGroups,
        focusOnVariation,
        toggleWidgetVisibility,
        hiddenWidgets,
        widgetToDisplayData,
        displayWidget,
      }}
    >
      {children}
      <AlertVariationEditionModal
        onClose={handleClose}
        variationData={focusedVariation}
      ></AlertVariationEditionModal>
      <DonationBarEditionModal
        onClose={handleClose}
        donationBarData={overlay.donationBar}
        isOpen={selectedWidgetKind === WidgetsKinds.DONATION_BAR}
      ></DonationBarEditionModal>
    </Context.Provider>
  );
};

export const useEditorContext = () => useContext(Context);
export default EditorContextProvider;

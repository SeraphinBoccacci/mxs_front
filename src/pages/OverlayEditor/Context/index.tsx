import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router";

import { useAuth } from "../../../components/AuthContext";
import LoadingScreen from "../../../components/LoadingScreen";
import { getAlertVariation, getUserOverlay } from "../../../services/overlays";
import { AlertVariation } from "../../../types/alerts";
import { DonationBar } from "../../../types/donationBar";
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
  setWidgetData: Dispatch<
    SetStateAction<AlertVariation | DonationBar | undefined>
  >;
}

const Context = createContext<ContextProps>({
  isAddWidgetOpenned: false,
  setIsAddWidgetOpenned: () => {},
  selectedWidget: null,
  setSelectedWidget: () => {},
  hasAtLeastOneWidget: false,
  getOverlayData: async () => {},
  groups: [],
  setGroups: () => {},
  focusOnVariation: () => {},
  toggleWidgetVisibility: () => {},
  hiddenWidgets: [],
  displayWidget: () => {},
  setWidgetData: () => {},
});

interface EditorContextProviderProps {
  children: ReactNode;
}

const EditorContextProvider = ({ children }: EditorContextProviderProps) => {
  const [isAddWidgetOpenned, setIsAddWidgetOpenned] = useState(false);
  const [hiddenWidgets, setHiddenWidgets] = useState<string[]>([]);
  const [overlay, setOverlay] = useState<OverlayData>();
  const [groups, setGroups] = useState<VariationGroup[]>([]);
  const [widgetData, setWidgetData] = useState<AlertVariation | DonationBar>();

  const [
    selectedWidgetKind,
    setSelectedWidgetKind,
  ] = useState<WidgetsKinds | null>(null);
  const [widgetToDisplayData, setWidgetToDisplayData] = useState<
    WidgetToDisplayData
  >();

  const { overlayLink } = useParams<{ overlayLink: string }>();
  const { herotag } = useAuth();

  const getOverlayData = useCallback(async () => {
    if (!herotag) return;

    const overlay = await getUserOverlay(herotag, overlayLink);

    if (overlay) {
      setOverlay(overlay);

      setGroups(overlay?.alerts?.groups || []);
    }
  }, [herotag, overlayLink, setOverlay]);

  useEffect(() => {
    getOverlayData();
  }, [getOverlayData]);

  const focusOnVariation = useCallback(
    (variation: AlertVariation) => {
      setWidgetData(variation);
    },
    [setWidgetData]
  );

  const handleClose = useCallback(() => {
    if (selectedWidgetKind === WidgetsKinds.ALERTS) {
      setWidgetData(undefined);
    }

    if (selectedWidgetKind === WidgetsKinds.DONATION_BAR) {
      setSelectedWidgetKind(null);
      setWidgetData(undefined);
    }
  }, [setWidgetData, setSelectedWidgetKind, selectedWidgetKind]);

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

  const modal = useMemo(() => {
    if (selectedWidgetKind === WidgetsKinds.ALERTS && widgetData) {
      return (
        <AlertVariationEditionModal
          onClose={handleClose}
          data={widgetData as AlertVariation}
        ></AlertVariationEditionModal>
      );
    }

    if (selectedWidgetKind === WidgetsKinds.DONATION_BAR && widgetData) {
      return (
        <DonationBarEditionModal
          onClose={handleClose}
          data={widgetData as DonationBar}
        ></DonationBarEditionModal>
      );
    }

    return null;
  }, [selectedWidgetKind, handleClose, widgetData]);

  if (!overlay) return <LoadingScreen></LoadingScreen>;

  return (
    <Context.Provider
      value={{
        isAddWidgetOpenned,
        setIsAddWidgetOpenned,
        selectedWidget: selectedWidgetKind,
        setSelectedWidget: setSelectedWidgetKind,
        hasAtLeastOneWidget: !!overlay.alerts || !!overlay.donationBar,
        overlay,
        getOverlayData,
        groups,
        setGroups,
        focusOnVariation,
        toggleWidgetVisibility,
        hiddenWidgets,
        widgetToDisplayData,
        displayWidget,
        setWidgetData,
      }}
    >
      {children}
      {modal}
    </Context.Provider>
  );
};

export const useEditorContext = () => useContext(Context);
export default EditorContextProvider;

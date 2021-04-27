import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import LoadingScreen from "../../../components/LoadingScreen";
import { useQueryString } from "../../../hooks/useQueryString";
import { OverlaysData } from "../../../interfaces/overlays";
import { getManyUserOverlays } from "../../../services/overlays";

interface ContextProps {
  overlays: OverlaysData[];
  getManyOverlays: (herotag: string) => Promise<void>;
}

const Context = createContext<ContextProps>({
  overlays: [],
  getManyOverlays: async () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [overlays, setOverlays] = useState<OverlaysData[]>();
  const [herotag] = useQueryString("herotag");

  const getManyOverlays = useCallback(
    async (herotag) => {
      if (herotag) {
        const fetchedOverlays = await getManyUserOverlays(herotag);

        setOverlays(fetchedOverlays);
      }
    },
    [setOverlays]
  );

  useEffect(() => {
    getManyOverlays(herotag);
  }, [herotag, getManyOverlays]);

  if (!overlays) return <LoadingScreen></LoadingScreen>;

  return (
    <Context.Provider value={{ overlays, getManyOverlays }}>
      {children}
    </Context.Provider>
  );
};

export const useOverlayContext = () => useContext(Context);
export default ContextProvider;

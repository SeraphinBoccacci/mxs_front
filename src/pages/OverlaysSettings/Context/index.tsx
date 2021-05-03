import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "../../../components/AuthContext";
import LoadingScreen from "../../../components/LoadingScreen";
import { getManyUserOverlays } from "../../../services/overlays";
import { OverlayData } from "../../../types/overlays";

interface ContextProps {
  overlays: OverlayData[];
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
  const [overlays, setOverlays] = useState<OverlayData[]>();
  const { herotag } = useAuth();

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

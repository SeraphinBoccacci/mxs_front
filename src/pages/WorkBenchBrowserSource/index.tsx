import React from "react";

import DraggableOverlay from "../../components/overlays/DraggableOverlay";

export interface TransactionData {
  amount: number;
  herotag: string;
  message: string;
}

const WorkBenchBrowserSource = () => {
  return <DraggableOverlay></DraggableOverlay>;
};

export default WorkBenchBrowserSource;

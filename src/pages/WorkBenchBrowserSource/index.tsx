import React from "react";

import DraggableBrowserSource from "../../components/DraggableBrowserSource";

export interface TransactionData {
  amount: number;
  herotag: string;
  message: string;
}

const WorkBenchBrowserSource = () => {
  return <DraggableBrowserSource></DraggableBrowserSource>;
};

export default WorkBenchBrowserSource;

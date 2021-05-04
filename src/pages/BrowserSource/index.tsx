import React from "react";

import Overlay from "../../components/overlays/Overlay";

export interface TransactionData {
  amount: number;
  herotag: string;
  message: string;
}

const BrowserSource = () => {
  return <Overlay></Overlay>;
};

export default BrowserSource;

import React from "react";

import EventTriggerer from "../../../EventTriggerer";
import VariationCreation from "../VariationCreation";

const CustomTemplateIntegration = () => {
  return (
    <div>
      <EventTriggerer triggeredEvent="streamElements"></EventTriggerer>
      <VariationCreation></VariationCreation>
    </div>
  );
};

export default CustomTemplateIntegration;

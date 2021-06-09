import { Modal } from "@material-ui/core";
import React from "react";
import { ChromePicker, ColorChangeHandler } from "react-color";

import { Content } from "./style";

interface PickerDialogProps {
  value?: string;
  onChange: ColorChangeHandler;
  onClick: () => void;
  showPicker: boolean;
}

const PickerDialog = ({
  showPicker,
  value,
  onClick,
  onChange,
}: PickerDialogProps) => (
  <Modal open={showPicker} onClose={onClick}>
    <Content>
      <ChromePicker color={value} onChange={onChange} />
    </Content>
  </Modal>
);

export default PickerDialog;

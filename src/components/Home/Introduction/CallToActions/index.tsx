import { Button } from "../../../Button";
import { CallsToActionsContainer } from "./style";

const CallToActions = () => {
  return (
    <CallsToActionsContainer>
      <Button type="reversed" onClick={() => {}}>
        I'm a creator
      </Button>
      <Button onClick={() => {}}>I'm a viewer</Button>
    </CallsToActionsContainer>
  );
};

export default CallToActions;

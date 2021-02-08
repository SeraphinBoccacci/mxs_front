import { Button } from "../../../Button";
import { CallsToActionsContainer } from "./style";

const CallToActions = () => {
  return (
    <CallsToActionsContainer>
      <Button type="reversed" onClick={() => {}}>
        I'm a streamer
      </Button>
      <Button onClick={() => {}}>I'm a subscriber</Button>
    </CallsToActionsContainer>
  );
};

export default CallToActions;

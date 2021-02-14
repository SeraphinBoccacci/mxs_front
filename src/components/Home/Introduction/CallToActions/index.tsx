import { Button } from "@material-ui/core";
import { CallsToActionsContainer } from "./style";

const CallToActions = ({
  setIsViewer,
}: {
  setIsViewer: (b: boolean) => void;
}) => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");

    if (!element) return;

    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }, 100);
  };
  return (
    <CallsToActionsContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setIsViewer(false);
          scrollToFeatures();
        }}
      >
        I'm a creator
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setIsViewer(true);
          scrollToFeatures();
        }}
      >
        I'm a viewer
      </Button>
    </CallsToActionsContainer>
  );
};

export default CallToActions;

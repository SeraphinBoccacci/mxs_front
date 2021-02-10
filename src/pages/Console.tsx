import StyledConsole from "../components/Console";
import { Helmet } from "react-helmet";

const Console = () => {
  return (
    <>
      <Helmet>
        <title>Console</title>
      </Helmet>
      <StyledConsole></StyledConsole>
    </>
  );
};

export default Console;

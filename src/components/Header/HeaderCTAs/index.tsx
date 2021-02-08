import { ButtonsContainer } from "./style";
import { Button } from "../../Button";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";

export const HeaderCTAs = () => {
  const { isUserConnected, setIsModalOpenned } = useContext(AuthContext);
  const history = useHistory();

  return (
    <>
      <ButtonsContainer>
        <Button onClick={() => {}} type="outlined">
          Docs
        </Button>
        {isUserConnected ? (
          <Button
            onClick={() => {
              history.push("/console");
            }}
          >
            Console
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsModalOpenned(true);
              history.push({
                search: "?isConnectModalOpenned=true",
              });
            }}
          >
            Connect
          </Button>
        )}
      </ButtonsContainer>
    </>
  );
};

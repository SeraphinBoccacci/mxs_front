import { AnchorsContainer, Anchor } from "./style";
import { Link } from "react-router-dom";
const Anchors = () => {
  return (
    <AnchorsContainer>
      <Link to="/">
        <Anchor>Home</Anchor>
      </Link>
      <Link to="/">
        <Anchor>Features</Anchor>
      </Link>
      <Link to="/">
        <Anchor>Community</Anchor>
      </Link>
    </AnchorsContainer>
  );
};

export default Anchors;

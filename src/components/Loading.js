import { TailSpin as Loader } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* align-items: center; */
`;

const Loading = ({ color = "#093577" }) => {
  return (
    <Container>
      <Loader
        type="TailSpin"
        color={color}
        height={20}
        width={20}
        style={{ margin: "auto" }}
      />
    </Container>
  );
};
export default Loading;

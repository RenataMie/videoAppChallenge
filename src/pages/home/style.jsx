import styled, { css } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  gap: 20px;
  padding: 40px 20px;
  // width: 100%;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    ${(props) =>
      props.theater &&
      css`
        flex-direction: column;
      `}
  }
`;

export default MainContainer;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  img {
    width: 50vw;
    height: auto;
  }

  @media only screen and (min-width: 1024px) {
    width: 30%;

    img {
      width: 15vw;
    }
  }
`;

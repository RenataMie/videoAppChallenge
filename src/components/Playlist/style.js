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

export const VideoContainer = styled.div`
  display: flex;
  align-tems: flex-start;
  gap: 10px;
  margin-top: 20px;
`;

export const VideoProperties = styled.div`
  width: 50%;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
  }

  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const FilterButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid grey;
  border-radius: 4px;
  color: #3c4043;
  cursor: pointer;

  font-size: 1rem;
  height: 36px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  margin-right: 10px;
}

&:hover {
  border-color: #dadce0;
  box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
  color: #202124;
}

&:focus {
  border-color: red;
  outline: none;
}
`;

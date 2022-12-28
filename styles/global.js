/* eslint-disable */
// @ts-nocheck
import { createGlobalStyle, css } from "styled-components";

const fontFaces = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap");
`;

export default createGlobalStyle`
  ${fontFaces}
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    font-family: 'Montserrat', sans-serif, sans-serif, Arial, Helvetica; 
  }
}`;

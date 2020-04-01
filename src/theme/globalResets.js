// Remove
import { createGlobalStyle } from "styled-components";

import RobotoLightUrl from "../assets/fonts/Roboto-Light.ttf";
import RobotoRegularUrl from "../assets/fonts/Roboto-Regular.ttf";
import RobotoBoldUrl from "../assets/fonts/Roboto-Bold.ttf";

export default createGlobalStyle`

  @font-face {
      font-family: 'Roboto';
      src: url(${RobotoLightUrl}) format("opentype");
      font-weight: lighter;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url(${RobotoRegularUrl}) format("opentype");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url(${RobotoRegularUrl}) format("opentype");
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Roboto';
      src: url(${RobotoBoldUrl}) format("opentype");
      font-weight: bold;
      font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;

    font-family: "Roboto" !important;
    
    :focus {
      outline: none;
    }
  }

  
  body {
    background-color: ${({ theme }) =>
      theme?.palette?.background?.main} !important;
  }

  ul {
    list-style: none;
  }
`;

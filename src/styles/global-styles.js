import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat";
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6{
  font-family: "Montserrat";
}
`
export const cor = {

  /* CORES */
  red: '#DF1C24',
  blue: '#312780',
  black: '#000000',
  lightgray: '#CCCCCC',
  superlightgray: '#EEEEEE',
  gray: '#737380',
  background: '#E5E5E5',
  white: '#ffffff',

  creditos: '#271F6C',
}

export const tipografia = {

  montserrat: "Montserrat",
  ibm: "Montserrat",
  sanSerif: "sans-serif",

  h1: "300 68px/72px",
  h2: "300 42px/48px",
  h3: "400 28px/40px",
  h4: "400 24px/32px",
  h5: "600 16px/24px",

  subtitle: "400 26px/48px",
  herobtn: "500 24px/32px",

  paragraph: "400 16px/24px",
  small: "400 14px/24px",
  caption: "400 12px/16px",
  button16: "500 16px/24px",
  button14: "500 14px/24px",

}
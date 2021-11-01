import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export const Toggle = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    margin: 5%;
    height: 40px;
    width: auto;
    color: #fff;
    cursor: pointer;
    z-index: 200;
    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 10%;
        top: 25px;
        right: -5px;
    }
`;

export const ThemeDiv = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Text = styled.div`
    padding: 0 5px;
    opacity: 0.5;
`;

export default GlobalStyles;

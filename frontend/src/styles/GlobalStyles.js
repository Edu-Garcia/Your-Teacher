import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: #E2E2E2;
  }

  body::-webkit-scrollbar-button{
    display: none;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #4A327A;
    border-radius: 20px;
    border: 3px solid #E2E2E2;
  }
`
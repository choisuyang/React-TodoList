import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplateBlock from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplateBlock>
        <TodoHead />
      </TodoTemplateBlock>
    </>
  );
}

export default App;

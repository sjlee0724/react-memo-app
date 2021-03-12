import React from "react";
import { createGlobalStyle } from "styled-components";
import Form from "./components/Form";
//import Form from "./components/Form";
import List from "./components/List";
import Template from "./components/Template";
import { TodoProvider } from "./Context";

const GlobalStyle = createGlobalStyle`
  body { 
    background: #9ca6b0;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <List />
        <Form />
      </Template>
    </TodoProvider>
  );
}

export default App;

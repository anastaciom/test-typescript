import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.ts";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "./globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <GlobalStyles/>
    </ChakraProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import GlobalState from "./context/index.jsx";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </GlobalState>
);

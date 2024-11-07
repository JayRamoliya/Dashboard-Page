import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Defaults to weight 400.css
import "@fontsource/ubuntu/500.css"; // Defaults to weight 500.css
import "@fontsource/ubuntu/700.css"; // Defaults to weight 700.css

import { theme } from "./Theme/Index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

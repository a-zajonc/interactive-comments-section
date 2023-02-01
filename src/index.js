import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const Textarea = defineStyleConfig({
  variants: {
    outline: {
      border: "1px solid",
      borderColor: "#EAECF1",
      _focus: { borderColor: "#5457B6" },
      _invalid: { borderColor: "#ED6468" },
      color: "#67727E",
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      darkBlue: "#5457B6",
    },
  },
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
  components: {
    Textarea,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

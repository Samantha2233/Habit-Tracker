// index.js = traditional entry point for all node apps.
// Here, what to render / where to render
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

// ChakraProvider props =
// resetCSS, theme, colorModeManager, portalZindex
const container = document.getElementById("root");
const root = createRoot(container);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </ApolloProvider>
  // </React.StrictMode>
);

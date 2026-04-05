import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { system } from "./theme";
import "./main.scss";
import "./index.css";
import GameProvider from "./provider/GameProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider value={system}>
      <BrowserRouter>
        <GameProvider>
          <App />
        </GameProvider>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>,
);

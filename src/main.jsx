import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

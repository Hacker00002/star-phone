import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LanguageContextProvider } from "./language/languageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </LanguageContextProvider>
);

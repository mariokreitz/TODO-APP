import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="f100aa633124458188869b92282f0566"
      domain="https://simpletodoapp.kinde.com"
      redirectUri="https://another-simple-todoapp.netlify.app"
      logoutUri="https://another-simple-todoapp.netlify.app"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>,
);

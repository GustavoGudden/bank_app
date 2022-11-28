import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import { AuthProvider } from "./context/auth/authProvider";
import { Globlastyle } from "./GlobalStyles";
import RouteControll from "./routes/RouteControll";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Globlastyle />
    <AuthProvider>
      <RouteControll></RouteControll>
    </AuthProvider>
  </React.StrictMode>
);

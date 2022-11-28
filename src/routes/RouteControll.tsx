import { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";
import { RequireAuth } from "../context/auth/requireAuth";

import Home from "../pages/Home";
import { Login } from "../pages/Login";

function RouteControll() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Login />}></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default RouteControll;

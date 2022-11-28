import { UserCircle } from "phosphor-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth/authContext";
import * as C from "./style";

export const Header = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  function handleSingout() {
    auth.singout();
    navigate("/");
  }

  return (
    <C.Header>
      <div>
        <h1>Bem vindo {auth.user?.username}</h1>
        <h2>our balance</h2>
        <p>R$:100,00</p>
      </div>
      <div className="userArea">
        <UserCircle size={50} color="white" />
        <button onClick={handleSingout}>sair</button>
      </div>
    </C.Header>
  );
};

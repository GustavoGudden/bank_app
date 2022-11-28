import { FacebookLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";

import * as C from "./style";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username && password) {
      const isLogged = await auth.signin(username, password);
      if (isLogged) {
        navigate("/home");
      } else {
        alert("usuario ou senha incorretos");
      }
    }
  };

  return (
    <C.LoginArea>
      <C.LoginBox>
        <h1>login</h1>
        <div>
          <p>username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <p>password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}> enter </button>
        <C.SocialArea>
          <FacebookLogo size={50} color="#6f6868" />
          <GithubLogo size={50} color="#6f6868" />
          <LinkedinLogo size={50} color="#6f6868" />
        </C.SocialArea>
        <h2>nao tem login?</h2>
      </C.LoginBox>
    </C.LoginArea>
  );
};

import "./styles.css";
import "../../styles/form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AllRightsReserved from "../../components/AllRigthsReserved";
import InputPassword from "../../components/InputPassword";

function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");

  return (
    <div className="container-form">
      <form className="form form-sign-up">
        <div className="text-center mb-lg">
          <h1>Cadastre-se</h1>
          <Link to="/sign-in">Entrar</Link>
        </div>
        <div className="body-sign-up">
          <div>
            <div className="flex-column">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" placeholder="Digite seu nome" />
            </div>
            <div className="flex-column">
              <label htmlFor="cep">CEP</label>
              <input id="cep" type="text" placeholder="Digite seu CPF" />
            </div>
            <InputPassword
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              setValue={setPassword}
            />
          </div>
          <div>
            <div className="flex-column">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" placeholder="Digite seu e-mail" />
            </div>
            <div className="flex-column">
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="password"
                placeholder="Digite sua cidade"
              />
            </div>
            <InputPassword
              label="Confirme sua senha"
              placeholder="Digite sua senha novamente"
              value={confirmPassowrd}
              setValue={setConfirmPassword}
            />
          </div>
        </div>
        <button className="btn-dark-blue">Cadastre-se</button>
        <AllRightsReserved />
      </form>
    </div>
  );
}

export default SignUp;

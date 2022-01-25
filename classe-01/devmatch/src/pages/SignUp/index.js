import "./styles.css";
import "../../styles/form.css";
import { Link } from "react-router-dom";

function SignUp() {
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
            <div className="flex-column">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
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
            <div className="flex-column">
              <label htmlFor="confirm-password">Confirme sua senha</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Digite sua senha novamente"
              />
            </div>
          </div>
        </div>
        <button className="btn-dark-blue">Cadastre-se</button>
        <span className="light-label">©2021 Todos os Direitos Reservados</span>
      </form>
    </div>
  );
}

export default SignUp;

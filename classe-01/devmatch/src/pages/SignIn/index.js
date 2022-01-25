import "./styles.css";
import "../../styles/form.css";
import { Link } from "react-router-dom";
import AllRightsReserved from "../../components/AllRigthsReserved";

function SignIn() {
  return (
    <div className="container-form">
      <form className="form form-sign-in">
        <div className="text-center mb-lg">
          <h1>Entrar</h1>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
        <div>
          <div className="flex-column">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" placeholder="Digite seu e-mail" />
          </div>
          <div className="flex-column">
            <label htmlFor="email">Senha</label>
            <input id="email" type="password" placeholder="Digite sua senha" />
          </div>
          <button className="btn-dark-blue">Entrar</button>
          <div className="flex-row items-center">
            <input type="checkbox" value="Lembrar-me" name="remember" />
            <span htmlFor="remember">Lembrar-me</span>
          </div>
        </div>
        <Link to="/recovery-password" className="my-lg">
          Esqueceu sua senha?
        </Link>
        <AllRightsReserved />
      </form>
    </div>
  );
}

export default SignIn;

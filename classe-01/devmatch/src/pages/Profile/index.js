import "./styles.css";
import ProfileBar from "../../components/ProfileBar";
import InputPassword from "../../components/InputPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Skills from "../../components/Skills";

function Profile() {
  return (
    <>
      <ProfileBar />
      <div className="profile-container flex-column items-center">
        <h1>Perfil</h1>
        <form className="flex-row">
          <div>
            <div className="flex-column">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" />
            </div>
            <div className="flex-column">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" />
            </div>
            <div className="flex-column">
              <label htmlFor="postal-code">CEP</label>
              <input id="postal-code" type="text" />
            </div>
            <div className="flex-column">
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </div>
            <InputPassword label="Senha" />
            <div>
              <h2>Habilidades</h2>
              <Skills
                skills={["NodeJS", "ReactJS", "ExpressJS"]}
                addButton={true}
              />
            </div>
          </div>
          <div className="flex-column">
            <div className="profile-picture flex-row content-center items-center flex-grow">
              <FontAwesomeIcon icon={faUser} size="5x" onClick={() => {}} />
            </div>
            <button className="btn-dark-blue">Salvar alterações</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;

import "./styles.css";
import ProfileBar from "../../components/ProfileBar";
import JobOpportunity from "../../components/JobOpportunity";
import GoogleLogo from "../../assets/google-logo.svg";
import ActionButtons from "../../components/ActionButtons";

function Main() {
  return (
    <div className="container-main">
      <ProfileBar />
      <JobOpportunity
        img_url={GoogleLogo}
        name="Google"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et pellentesque risus tempor blandit. Eu nibh et at dignissim diam, donec adipiscing. Suspendisse imperdiet mauris in enim diam, tortor id aliquet sagittis. Aliquam arcu, et proin phasellus porta aliquet suscipit. Sed nunc, nam sem placerat aliquam vitae vel hendrerit ullamcorper. Vel faucibus quisque diam pulvinar quam. Neque nibh est tellus lacus malesuada egestas volutpat sit vitae. Nunc mollis pellentesque netus sollicitudin id egestas convallis. Posuere tellus amet ultricies arcu commodo vitae in in. Sed bibendum enim at ut condimentum pulvinar vulputate suspendisse diam. Porta tempus ornare ac nulla tristique eleifend libero cursus. Pellentesque felis ornare gravida viverra cursus eget curabitur feugiat. Urna, velit ornare vitae facilisi egestas est. Amet nibh porttitor scelerisque felis felis enim. Id pellentesque ut porta nec sed a, cursus. Platea sem odio ornare ut varius fermentum, facilisis id. A, amet ut sit eu nisl. Mattis molestie urna lacus aliquet tempus semper a sapien. Eget aliquet risus commodo, nulla tellus. Sem et in in diam enim, nunc erat egestas leo. Enim id ultrices platea habitant quis egestas. Duis gravida quam molestie."
        requirements={["React", "NodeJs", "ExpressJS"]}
        salary="5.200,00"
        benefits={[
          "VT",
          "VA",
          "Plano de saúde",
          "Gympass",
          "Auxílio Home Office",
        ]}
      />
      <ActionButtons />
    </div>
  );
}

export default Main;

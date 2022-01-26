import "./styles.css";
import LikeButton from "../../assets/like-button.svg";
import TrashButton from "../../assets/trash-button.svg";

function ActionButtons() {
  return (
    <div>
      <img className="button-icon" src={LikeButton} alt="like" />
      <img className="button-icon" src={TrashButton} alt="trash" />
    </div>
  );
}

export default ActionButtons;

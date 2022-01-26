import "./styles.css";
import LikeButton from "../../assets/like-button.svg";
import TrashButton from "../../assets/trash-button.svg";
import ModalMatch from "../ModalMatch";
import { useState } from "react";

function ActionButtons() {
  const [open, setOpen] = useState(false);

  function handleAddLike() {
    setOpen(true);
  }

  return (
    <div>
      <ModalMatch open={open} setOpen={setOpen} />
      <img
        className="button-icon"
        src={LikeButton}
        alt="like"
        onClick={() => handleAddLike()}
      />
      <img className="button-icon" src={TrashButton} alt="trash" />
    </div>
  );
}

export default ActionButtons;

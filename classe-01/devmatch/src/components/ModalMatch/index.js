import "./styles.css";
import CloseIcon from "../../assets/close-icon.svg";
import SmileIcon from "../../assets/smile-icon.svg";

function ModalMatch({ open, setOpen }) {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={CloseIcon}
              className="modal-close-icon"
              alt="close button"
              onClick={() => setOpen(false)}
            />
            <div>
              <h1>Match</h1>
              <h3>Google gostou de você!</h3>
            </div>
            <img src={SmileIcon} alt="smile icon" className="smile-icon" />
          </div>
        </div>
      )}
    </>
  );
}

export default ModalMatch;

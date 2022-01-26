import "./styles.css";
import { useEffect, useState } from "react";
import ProfileIcon from "../../assets/profile-icon.svg";
import CloseIcon from "../../assets/close-icon.svg";
import { useNavigate, useLocation } from "react-router-dom";

function ProfileBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleOpenProfilePage() {
    if (location.pathname === "/profile") {
      navigate("/");
      return;
    }

    navigate("/profile");
  }

  useEffect(() => {
    if (location.pathname === "/profile") {
      setOpen(true);
    }
  }, [location]);

  return (
    <div>
      <img
        src={open ? CloseIcon : ProfileIcon}
        alt="Icon"
        className="icon"
        onClick={() => handleOpenProfilePage()}
      />
    </div>
  );
}

export default ProfileBar;

import "./styles.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function InputPassword({ label, placeholder, value, setValue }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-column input-password">
      <label htmlFor="password">{label}</label>
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className="eye-password"
        size="lg"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
}

export default InputPassword;

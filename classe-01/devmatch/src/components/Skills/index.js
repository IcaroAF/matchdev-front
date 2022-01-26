import "./styles.css";
import ModalSkills from "../ModalSkills";
import { useState } from "react";

function Skills({ skills, addButton }) {
  const [open, setOpen] = useState(false);

  function handleAddSkills(e) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div className="flex-row items-center">
      <ModalSkills open={open} setOpen={setOpen} />
      {skills.map((skill) => (
        <div key={skill} className="badge blue">
          {skill}
        </div>
      ))}
      {addButton && (
        <button
          className="badge blue-outline add-skills"
          onClick={(e) => handleAddSkills(e)}
        >
          Adicionar
        </button>
      )}
    </div>
  );
}

export default Skills;

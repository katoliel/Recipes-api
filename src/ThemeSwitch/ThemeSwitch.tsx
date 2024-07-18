import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import "../App.css";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style: React.CSSProperties = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <>
      <div style={{ padding: "10px" }} className="switcharea">
        <p className="switchtext">The current theme is {theme}</p>

        <label className="switch" onChange={toggleTheme} style={style}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default ThemeSwitch;

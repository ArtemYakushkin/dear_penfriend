import "./darkModeMobile.css";
// import { BsEmojiSunglassesFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ReactComponent as Sun } from "../../image/Sun.svg";
import { ReactComponent as Moon } from "../../image/Moon.svg";

const DarkModeMobile = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark_mode-mobile">
      <input
        className="dark_mode-mobile_input"
        type="checkbox"
        id="darkmode-toggle"
        style={{ display: "none" }}
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode-mobile_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkModeMobile;
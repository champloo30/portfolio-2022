import "./menu.scss";
import person from "../../assets/icons8-person.svg";
import briefcase from "../../assets/icons8-briefcase.svg";
import iphone from "../../assets/icons8-iphone-x.svg";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="about">
        <a href="#about">
          <img src={person} alt="Person Icon" className="icon" />
          <h2>About Me</h2>
        </a>
      </div>
      <div className="portfolio">
        <img src={briefcase} alt="Briefcase Icon" className="icon" />
        <h2>Portfolio</h2>
      </div>
      <div className="contact">
        <img src={iphone} alt="iPhone X Icon" className="icon" />
        <h2>Contact</h2>
      </div>
    </div>
  );
}
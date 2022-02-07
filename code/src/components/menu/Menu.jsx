import "./menu.scss";
import person from "../../assets/icons8-person.svg";
import briefcase from "../../assets/icons8-briefcase.svg";
import iphone from "../../assets/icons8-iphone-x.svg";

export default function Menu({ menuOpen, setMenuOpen, isDarkModeActive }) {
  return (
    <div className={isDarkModeActive ? "menu-dark " + (menuOpen && "active-dark") : "menu " + (menuOpen && "active")}>
      <div className="about-menu">
        <a href="#about" className="about-container" onClick={()=>setMenuOpen(false)}>
          <img src={person} alt="Person Icon" className="icon" />
          <h2>About Me</h2>
        </a>
      </div>
      <div className="portfolio-menu">
        <a href="#portfolio" className="portfolio-container" onClick={()=>setMenuOpen(false)}>
          <img src={briefcase} alt="Briefcase Icon" className="icon" />
          <h2>Portfolio</h2>
        </a>
      </div>
      <div className="contact-menu">
        <a href="#contact" className="contact-container" onClick={()=>setMenuOpen(false)}>
          <img src={iphone} alt="iPhone X Icon" className="icon" />
          <h2>Contact</h2>
        </a>
      </div>
    </div>
  );
}
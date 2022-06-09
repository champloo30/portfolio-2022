import "./navbar.scss";
import home from "../../assets/home-svgrepo-com.svg";
import person from "../../assets/icons8-person.svg";
import briefcase from "../../assets/icons8-briefcase.svg";
import iphone from "../../assets/icons8-iphone-x.svg";

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="nav-container">
        <ul className="nav-items">
          <a href="#home">
            <li id="home-nav" className="nav-link active" >
              <img src={home} alt="link to home page" className="home-i" />
            </li>
          </a>
          <a href="#about">
            <li id="about-nav" className="nav-link" >
              <img src={person} alt="link to about page" className="person-i" />
            </li>
          </a>
          <a href="#portfolio">
            <li id="portfolio-nav" className="nav-link" >
              <img src={briefcase} alt="link to portfolio page" className="brief-i" />
            </li>
          </a>
          <a href="#contact">
            <li id="contact-nav" className="nav-link" >
              <img src={iphone} alt="link to contact page" className="phone-i" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
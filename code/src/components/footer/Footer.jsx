import "./footer.scss"
import resume from "../../assets/DJLD-Resume.pdf";
import instagram from "../../assets/instagram-svgrepo-com.svg";
import twitter from "../../assets/twitter-svgrepo-com.svg";
import tiktok from "../../assets/icons8-tiktok.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="f-title-box">
          <div className="h-line"></div>
          <h2>DJLDev</h2>
          <div className="h-line"></div>
        </div>
        <div className="f-navbar">
          <a href="#home" className="nav-links">
            <h3>Home</h3>
          </a>
          <a href="#about" className="nav-links">
            <h3>About</h3>
          </a>
          <a href="#portfolio" className="nav-links">
            <h3>Portfolio</h3>
          </a>
          <a href="#contact" className="nav-links">
            <h3>Contact</h3>
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-links" >
            <h3><span>Resume</span></h3>
          </a>
        </div>
        <div className="icon-links">
          <a href="https://www.instagram.com/champloo.30/" target="_blank" rel="noopener noreferrer" className="icon-c" >
            <img src={instagram} alt="ink to personal instagram" className="icon" />
          </a>
          <a href="https://twitter.com/champloo30" target="_blank" rel="noopener noreferrer" className="icon-c" >
            <img src={twitter} alt="ink to personal twiiter" className="icon" />
          </a>
          <a href="https://www.tiktok.com/@champloo30" target="_blank" rel="noopener noreferrer" className="icon-c" >
            <img src={tiktok} alt="ink to personal tictok" className="icon-t" />
          </a>
        </div>
      </div>
    </div>
  );
}
import "./home.scss";
import $ from "jquery";
import logo from "../../assets/DJLDevLogo.png"
import linkedin from "../../assets/icons8-linkedin.svg";
import github from "../../assets/icons8-github.svg";
import email from "../../assets/email-svgrepo-com.svg"
import resume from "../../assets/DJLD-Resume.pdf";

export default function Home() {

  $(window).on("load", function() {
    $(".top-h2").animate({opacity: "1"}, 1500);
    $(".left").slideDown(1500).css("display", "flex");
    $(".right").slideDown(1500).css("display", "flex");
    $(".logo-container").delay(2500).animate({opacity: "1"}, 1500);
    $(".bottom-h2").delay(4500).animate({opacity: "1"}, 1500);
    $(".c-a").delay(6500).fadeIn(1500).animate({opacity: "1"}, 1500);
  });

  return (
    <div id="home" className="home">
      <div className="home-container">
        <div className="left">
          <div className="v-line-left"></div>
          <div className="m-icons">
            <a className="l-a" href="https://www.linkedin.com/in/dalyn-dunn-a70176216/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="link to linkedin" className="i-home" />
            </a>
            <a className="l-a" href="https://github.com/champloo30" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="link to github" className="i-home" />
            </a>
            <a className="l-a" href="mailto:djld30@gmail.com?subject=Let's Chat">
              <img src={email} alt="pop up to directly email me" className="i-email" />
            </a>
          </div>
          <div className="v-line-left"></div>
        </div>
        <div className="center">
          <h2 className="top-h2">Hello I'm</h2>
          <div className="logo-container">
            <img src={logo} alt="DJLDev Logo" className="logo" />
          </div>
          <h2 className="bottom-h2">Frontend Developer & Designer</h2>
          <div className="home-cta">
            <a className="c-a" href={resume} target="_blank" rel="noopener noreferrer">
              <button className="resume-btn">Resume</button>
            </a>
            <a className="c-a" href="#contact">
              <button className="lc-btn">Let's Chat</button>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="v-line-right"></div>
          <span>Scroll Down</span>
          <div className="v-line-right"></div>
        </div>
      </div>
    </div>
  );
}
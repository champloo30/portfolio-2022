import "./about.scss";
import avatar from "../../assets/Avatar-Maker.png";
import email from "../../assets/icons8-at-sign.svg";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import document from "../../assets/icons8-document.svg";
import html from "../../assets/icons8-html-5.svg";
import css from "../../assets/icons8-css3.svg";
import javascript from "../../assets/icons8-javascript.svg";
import react from "../../assets/icons8-react-native.svg";
import sass from "../../assets/icons8-sass.svg";
import pdf from "../../assets/Dalyn_J.L._Dunn_Resume.pdf";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="part-one">
        <img src={avatar} alt="Avatar of Me" className="avatar" />
        <h2>Dalyn J. L. Dunn</h2>
        <div className="po-icons">
          <a href="mailto:djld30@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt="Email Icon" className="icon" /></a>
          <a href="http://github.com/champloo30" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github Icon" className="icon" /></a>
          <a href="http://www.linkedin.com/in/dalyn-dunn-a70176216/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn Icon" className="icon" /></a>
          <a href={pdf} target="_blank" rel="noreferrer"><img src={document} alt="Document Icon" className="icon" /></a>
        </div>
      </div>
      <div className="part-two">
        <h1>"Hello World"</h1>
        <p>Hello and welcome! My name is Dalyn and I'm a self-taught Front-End Software Developer and UX/UI Designer. I am currently working as a freelance developer and designer for websites and business brandings.</p>
        <h2>Skills</h2>
        <div className="pt-icons">
          <img src={html} alt="HTML Icon" className="icon" />
          <img src={css} alt="CSS Icon" className="icon" />
          <img src={javascript} alt="JavaScript Icon" className="icon" />
          <img src={react} alt="React Icon" className="icon" />
          <img src={sass} alt="Sass Icon" className="icon" />
        </div>
      </div>
    </div>
  );
}
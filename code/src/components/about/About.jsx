import "./about.scss";
import djld from "../../assets/DJLD.jpg";
import check from "../../assets/check-svgrepo-com.svg";

export default function About() {

  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="a-title">
          <h3>Get To Know</h3>
          <div className="a-title-box">
            <div className="h-line"></div>
            <h2>me</h2>
            <div className="h-line"></div>
          </div>
        </div>
        <div className="a-content">
          <div className="left">
            <div className="img-container">
              <img src={djld} alt="Dalyn J. L. Dunn" className="djld" />
            </div>
          </div>
          <div className="right">
            <p>Hello and welcome! My name is Dalyn J. L. Dunn and I'm a self-taught Front-End Web Developer and UX/UI Designer. I'm currently working full-time as a Web Content Developer at Abercrombie & Fitch Co. and part-time as a freelance developer and designer for websites and business brandings.</p>
            <div className="skills">
              <h2>Skills</h2>
              <div className="skills-container">
                <div className="skills-row">
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">html</span>
                  </div>
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">css</span>
                  </div>
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">sass</span>
                  </div>
                </div>
                <div className="skills-row">
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">bootstrap</span>
                  </div>
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">javascript</span>
                  </div>
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">jquery</span>
                  </div>
                </div>
                <div className="skills-row">
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">react</span>
                  </div>
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">ux/ui</span>
                  </div>
                  <div className="skill">
                    <img src={check} alt="" className="skill-img" />
                    <span className="skill-name">adobe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
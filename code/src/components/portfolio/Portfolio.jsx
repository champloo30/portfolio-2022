import "./portfolio.scss";
import pkmo from "../../assets/pkmo-screenshot.png"
import djldev from "../../assets/djldev-screenshot.jpeg"

export default function Portfolio({ isDarkModeActive }) {
  return (
    <div className={isDarkModeActive ? "portfolio-dark" : "portfolio"} id="portfolio">
      <h1 >Portfolio</h1>
      <div className="item-container">
        <div className="item">
          <div className="website-box">
            <img src={pkmo} alt="Peace Kingdom Ministries of Ohio Website" className="portfolio-img" />
          </div>
          <div className="text-box">
            <h2>Peace Kingdom Ministries of Ohio</h2>
            <p>This is a website I built for a church as my first freelance project. This is a basic multi-page site built with React, JavaScript, and Sass and the contact form is also linked to a Google Sheets using NoCodeAPI.</p>
            <h3>Stack</h3>
            <div className="stack">
              <h4>React.js</h4>
              <h4>JavaScript</h4>
              <h4>Sass</h4>
            </div>
            <div className="buttons">
              <a className="button-link" href="https://github.com/champloo30/pkmoSite" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h5>Code</h5>
                </div>
              </a>
              <a className="button-link" href="https://peacekmo.web.app/" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h5>Demo</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="item">
        <div className="website-box">
            <img src={djldev} alt="DJLDev Portfolio Website" className="portfolio-img" />
          </div>
          <div className="text-box">
            <h2>DJLDev Portfolio Website</h2>
            <p>This is my updated personal portfolio website. I used all of the skills I've learned until the point using React, JavaScript, and Sass to build this. Also, the contact page is linked to Google Sheets using NoCodeAPI as well.</p>
            <h3>Stack</h3>
            <div className="stack">
              <h4>React.js</h4>
              <h4>JavaScript</h4>
              <h4>Sass</h4>
            </div>
            <div className="buttons">
              <a className="button-link" href="https://github.com/champloo30/portfolio-2022" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h5>Code</h5>
                </div>
              </a>
              <a className="button-link" href="https://djldev-550e6.web.app/" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h5>Demo</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import "./portfolio.scss";
import pkmo from "../../assets/pkmo-screenshot.png"
import djldev from "../../assets/djldev-screenshot.jpeg"

export default function Portfolio({ isDarkModeActive }) {
  return (
    <div className={isDarkModeActive ? "portfolio-dark" : "portfolio"} id="portfolio">
      <h1>Portfolio</h1>
      <div className="item-container">
        <div className="item">
          <div className="website-box">
            <img src={pkmo} alt="Peace Kingdom Ministries of Ohio Website" className="portfolio-img" />
          </div>
          <div className="text-box">
            <h2>Peace Kingdom Ministries of Ohio</h2>
            <p>Website built for a church using the stack of React, JavaScript, and Sass.</p>
            <div className="buttons">
              <a className="button-link" href="https://github.com/champloo30/pkmoSite" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h3>Code</h3>
                </div>
              </a>
              <div className="link-button">
                <h3>Demo</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
        <div className="website-box">
            <img src={djldev} alt="DJLDev Portfolio Website" className="portfolio-img" />
          </div>
          <div className="text-box">
            <h2>DJLDev Portfolio Website</h2>
            <p>Website built for my portfolio using the stack of React, JavaScript, and Sass.</p>
            <div className="buttons">
              <a className="button-link" href="https://github.com/champloo30/portfolio-2022" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h3>Code</h3>
                </div>
              </a>
              <a className="button-link" href="https://djldev-550e6.web.app/" target="_blank" rel="noopener noreferrer">
                <div className="link-button">
                  <h3>Demo</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="website-box">
            <div className="portfolio-img"></div>
          </div>
          <div className="text-box">
            <h2>N/A</h2>
            <p>N/A</p>
          </div>
        </div>
      </div>
    </div>
  )
}
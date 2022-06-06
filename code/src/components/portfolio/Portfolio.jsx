import "./portfolio.scss";
import pkmo from "../../assets/pkmo-screenshot.png"
import djldev from "../../assets/djldev-screenshot.png"

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="p-title">
          <h3>My Recent Work</h3>
          <div className="p-title-box">
            <div className="h-line"></div>
            <h2>Portfolio</h2>
            <div className="h-line"></div>
          </div>
        </div>
        <div className="boxes-container">
          <div className="box">
            <img src={pkmo} alt="p k m o website" className="p-img" />
            <h3>Peace Kingdom Ministries of Ohio</h3>
            <div className="p-btn-container">
              <a href="https://github.com/champloo30/pkmoSite" target="_blank" rel="noopener noreferrer" className="p-a">
                <button className="p-btn-g">Github</button>
              </a>
              <a href="http://peacekmo.org" target="_blank" rel="noopener noreferrer" className="p-a">
                <button className="p-btn-l">Live</button>
              </a>
            </div>
          </div>
          <div className="box">
            <img src={djldev} alt="d j l dev website" className="p-img" />
            <h3>DJLDev</h3>
            <div className="p-btn-container">
              <a href="https://github.com/champloo30/portfolio-2022" target="_blank" rel="noopener noreferrer" className="p-a">
                <button className="p-btn-g">Github</button>
              </a>
              <a href="http://djldev.tech" target="_blank" rel="noopener noreferrer" className="p-a">
                <button className="p-btn-l">Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
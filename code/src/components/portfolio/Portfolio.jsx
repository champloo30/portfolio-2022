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
            <img src="" alt="" className="p-img" />
            <h3>Peace Kingdom Ministries of Ohio</h3>
            <div className="p-btn-container">
              <button className="p-btn">Github</button>
              <button className="p-btn">Live</button>
            </div>
          </div>
          <div className="box">
            <img src="" alt="" className="p-img" />
            <h3>DJLDev</h3>
            <div className="p-btn-container">
              <button className="p-btn">Github</button>
              <button className="p-btn">Live</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
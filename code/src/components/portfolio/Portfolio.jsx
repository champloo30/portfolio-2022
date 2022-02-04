import "./portfolio.scss";
import pkmo from "../../assets/pkmo-screenshot.png"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="item-container">
        <div className="item">
          <div className="website-box">
            <img src={pkmo} alt="PKMO Website Link" className="portfolio-img" />
          </div>
          <div className="text-box">
            <h2>Peace Kingdom Ministries of Ohio</h2>
            <p>Website built with React, JavaScript, and Sass.</p>
          </div>
        </div>
        <div className="item">
          <div className="website-box"></div>
          <div className="text-box">
            <h2>N/A</h2>
            <p>N/A</p>
          </div>
        </div>
        <div className="item">
          <div className="website-box"></div>
          <div className="text-box">
            <h2>N/A</h2>
            <p>N/A</p>
          </div>
        </div>
      </div>
    </div>
  )
}
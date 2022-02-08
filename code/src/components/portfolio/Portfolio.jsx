import "./portfolio.scss";

export default function Portfolio({ isDarkModeActive }) {
  return (
    <div className={isDarkModeActive ? "portfolio-dark" : "portfolio"} id="portfolio">
      <h1>Portfolio</h1>
      <div className="item-container">
        <div className="item">
          <div className="website-box">
            <img src="https://media.giphy.com/media/LyFMPTcxBdTwYSKLyF/giphy.gif" alt="GIF of Peace Kingdom Ministries of Ohio Website" className="portfolio-img" />
          </div>
          <div className="text-box">
            <h2>Peace Kingdom Ministries of Ohio</h2>
            <p>Website built with React, JavaScript, and Sass.</p>
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
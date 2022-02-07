import "./navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen, isDarkModeActive, setIsDarkModeActive }) {

  const changeNavbarColor = () => {
    if (window.scrollY >= 1 && isDarkModeActive === false) {
      document.querySelector('.navbar').style.backgroundColor = 'var(--gunmetal)';
      document.querySelector('.logo').style.color = 'var(--bone)';
      document.getElementById('line1').style.backgroundColor = 'var(--bone)';
      document.getElementById('line2').style.backgroundColor = 'var(--bone)';
      document.getElementById('line3').style.backgroundColor = 'var(--bone)';
    } else if (window.scrollY >= 1 && isDarkModeActive === true) {
      document.querySelector('.navbar-dark').style.backgroundColor = 'var(--bone)';
      document.querySelector('.logo').style.color = 'var(--gunmetal)';
      document.getElementById('line1').style.backgroundColor = 'var(--gunmetal)';
      document.getElementById('line2').style.backgroundColor = 'var(--gunmetal)';
      document.getElementById('line3').style.backgroundColor = 'var(--gunmetal)';
    } else if (isDarkModeActive === true) {
      document.querySelector('.navbar-dark').style.backgroundColor = '';
      document.querySelector('.logo').style.color = '';
      document.getElementById('line1').style.backgroundColor = '';
      document.getElementById('line2').style.backgroundColor = '';
      document.getElementById('line3').style.backgroundColor = '';
    } else if (isDarkModeActive === false) {
      document.querySelector('.navbar').style.backgroundColor = '';
      document.querySelector('.logo').style.color = '';
      document.getElementById('line1').style.backgroundColor = '';
      document.getElementById('line2').style.backgroundColor = '';
      document.getElementById('line3').style.backgroundColor = '';
    }
    return
  };
  window.addEventListener('scroll', changeNavbarColor)

  const switchModes = (mode) => {
    if (mode === "light") {
      setIsDarkModeActive(false)
    } else if (mode === "dark") {
      setIsDarkModeActive(true)
    }
  }

  return (
    <div className={isDarkModeActive ? "navbar-dark " + (menuOpen && "active-dark") : "navbar " + (menuOpen && "active")} onScroll={changeNavbarColor} >
      <div className="container">
        <div className="left">
          <a href="#home" className="logo" onClick={()=>setMenuOpen(false)}>DJLD</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span id="line1"></span>
            <span id="line2"></span>
            <span id="line3"></span>
          </div>
          <div className={isDarkModeActive ? "toggle-dark": "toggle-light"}>
            <h4 className="light-mode" onClick={() => switchModes("light")}>
              Light
            </h4>
            <h4 className="dark-mode" onClick={() => switchModes("dark")}>
              Dark
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
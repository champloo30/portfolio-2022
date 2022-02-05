import "./navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {

  const changeNavbarColor = () => {
    let colorChange = document.querySelector('.navbar')
    if (window.scrollY >= 1) {
      colorChange.style.backgroundColor = '#F38375';
    } else {
      colorChange.style.backgroundColor = '';
    }
    return
  };
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={"navbar " + (menuOpen && "active")} onScroll={changeNavbarColor} >
      <div className="container">
        <div className="left">
          <a href="#home" className="logo" onClick={()=>setMenuOpen(false)}>DJLD</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
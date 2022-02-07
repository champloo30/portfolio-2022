import "./footer.scss"

export default function Footer({ isDarkModeActive }) {
  return (
    <div className={isDarkModeActive ? "footer-dark" : "footer"}>
      <a href="#home"><h3>DJLD | 2022</h3></a>
    </div>
  );
}
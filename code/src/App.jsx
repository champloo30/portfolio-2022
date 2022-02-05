import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx"
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Work from "./components/portfolio/Portfolio.jsx";
import "./app.scss";
import "./global.scss";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

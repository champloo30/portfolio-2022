import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx"
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Work from "./components/portfolio/Portfolio.jsx";
import "./app.scss";
import "./global.scss";
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;

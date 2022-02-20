import "./home.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home( { isDarkModeActive } ) {
  
  const textRef = useRef()

  useEffect(() => {
      init(textRef.current, { 
          showCursor: true,
          backDelay: 2000,
          backSpeed: 60,
          strings: ['Developer', 'Designer', '3D Artist'],
      });
  }, [])


  return (
    <div id="home" className={isDarkModeActive ? "home-dark" : "home"}>
      <div className="text-box">
        <h2>Hi there, I'm</h2>
        <h1>Dalyn J. L. Dunn</h1>
        <div className="bottom-text-home">
          <h3>Front-End <span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  );
}
import "./home.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home() {
  const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 2000,
            backSpeed: 80,
            strings: ['Developer', 'Designer'],
        });
    }, [])

  return (
    <div className="home">
      <div className="text-box">
        <h2>Hello there, I'm</h2>
        <h1>Dalyn J. L. Dunn</h1>
        <div className="bottom-text-home">
          <h3>Front-End <span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  );
}
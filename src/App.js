import "./App.css";
import CoffeeSection from "./Components/CoffeeSection";
import React, { useState, useEffect } from "react";

function App() {
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }
  const width = useWindowWidth();
  const backgroundImage =
    width > 1280
      ? `${process.env.PUBLIC_URL}/resources/bg-cafe-lg.jpg`
      : width > 1024
      ? `${process.env.PUBLIC_URL}/bg-cafe-sm.jpg`
      : `${process.env.PUBLIC_URL}/bg-cafe.jpg)`;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <CoffeeSection />
    </div>
  );
}

export default App;

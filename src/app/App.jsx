import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "@/hooks/ScrollToTop";
import ScrollBack from "./ScrollBack";
import MusicPlayer from "./MusicPlayer";
import SmoothScroll from "./SmoothScroll";
import AnimatedCursor from "@/hooks/AnimatedCursor";
import Snowfall from "react-snowfall";

function App() {
  useEffect(() => {
    // Block common keys
    const blockDevTools = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C", "U"].includes(e.key))
      ) {
        e.preventDefault();
      }
    };

    const blockContextMenu = (e) => e.preventDefault();

    document.addEventListener("keydown", blockDevTools);
    document.addEventListener("contextmenu", blockContextMenu);

    // Tease curious devs 😏
    setTimeout(() => {
      console.log(
        "%c🚫 Access Denied.",
        "color: red; font-size: 18px; font-weight: bold;"
      );
      console.log(
        "%cBut we like curious minds...",
        "color: #f59e0b; font-size: 14px;"
      );
      console.log(
        "%cTry calling crackTheConsole() 😉",
        "color: #10b981; font-size: 14px;"
      );
    }, 3000);

    // Crack method
    window.crackTheConsole = () => {
      console.clear();
      console.log(
        "%c🎉 Congrats! You cracked the console hook.",
        "color: #22c55e; font-size: 18px; font-weight: bold;"
      );
      console.log(
        "%c🎉 You did it! Curious minds like yours build the future.",
        "color: #22c55e; font-size: 18px; font-weight: bold;"
      );
      console.log(
        "%cWishing you an amazing dev journey ahead",
        "color: #3b82f6; font-size: 16px;"
      );
    };

    return () => {
      document.removeEventListener("keydown", blockDevTools);
      document.removeEventListener("contextmenu", blockContextMenu);
    };
  }, []);

  return (
    <Router>
       <SmoothScroll />
       <Snowfall
        snowflakeCount={75}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none", // 👈 important
        }}
      />
      <ScrollToTop />
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="193, 139, 19"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <ScrollBack />
      <MusicPlayer />
      <AppRoutes />

    </Router>
  );
}

export default App;

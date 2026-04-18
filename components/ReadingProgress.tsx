"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "64px",
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "transparent",
        zIndex: 99,
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#C4603A",
          width: `${progress}%`,
          transition: "width 100ms linear",
        }}
      />
    </div>
  );
}

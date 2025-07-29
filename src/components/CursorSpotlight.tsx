import React, { useState, useEffect, useRef } from "react";

const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={spotlightRef}
        className="spotlight"
        style={{ left: "-100px", top: "-100px" }}
      />
      <style>{`
        .spotlight {
          position: fixed;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(60, 218, 17, 0.3) 0%, rgba(0,255,100,0.15) 40%, transparent 70%);
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
          will-change: transform;
          mix-blend-mode: screen;
        }
        .spotlight::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: rgba(0,255,100,0.05);
          filter: blur(10px);
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default CursorSpotlight;

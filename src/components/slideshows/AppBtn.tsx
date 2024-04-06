"use client";
import Link from "next/link";

interface FinishSlideshowBtnProps {
  text: string;
  onClick?: () => void;
}
export function FinishSlideshowBtn({ text, onClick }: FinishSlideshowBtnProps) {
   const handleClick = () => {
     if (onClick) {
       onClick();
     }
  };
  
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          margin: 24,
          cursor: "pointer",
          padding: "14px 80px",
          color: "#fff",
          textDecoration: "none",
          userSelect: "none",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        {text}
      </button>
    </>
  );
}

"use client";
import { slideStyles } from "../../components/slideshows";
import Image from "next/image";
import slide2 from "../../public/plumslide2.jpg";
import styled from "@emotion/styled";

// Create a styled component for the div with slideStyles applied
const SlideDiv = styled.div`
  ${slideStyles}
`;
export function SlideThree() {
  return (
    <SlideDiv>
      <div className="content" style={{ position: "relative" }}>
        <Image
          priority={true}
          alt="slideshow image"
          src={slide2}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        />
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(82, 32, 128, 0.426), rgba(26, 10, 40, 0.6), #000000 93%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 1, // Ensure text is above the overlay
          }}
        >
          <h1>Plum Finance</h1>
          <p>Your finance Solution</p>
        </div>
      </div>
    </SlideDiv>
  );
}

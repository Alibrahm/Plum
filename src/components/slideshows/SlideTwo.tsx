"use client";
import { slideStyles } from "../../components/slideshows";
// import  slideStyles  from "../../components/slidestyles";
import Image from "next/image";
import profilePic from "../../public/plumslide3.jpg";
import { css } from '@emotion/react';
import styled from "@emotion/styled";

// Create a styled component for the div with slideStyles applied
const SlideDiv = styled.div`
  ${slideStyles}
`;

export function SlideTwo() {
  return (
    <SlideDiv>
      <div className="content" style={{ position: "relative" }}>
        <Image
          priority={true}
          alt="slideshow image"
          src={profilePic}
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
          <h1>Plum PWA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Natoque risus consectetur
            nam odio laoreet
          </p>
        </div>
      </div>
    </SlideDiv>
  );
}

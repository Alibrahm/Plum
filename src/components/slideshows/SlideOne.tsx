"use client";
import { slideStyles } from "../../components/slideshows/Slideshow";
// import slideStyles  from "../../components/slidestyles";
import Image from "next/image";
import plumlogo from "../../images/plumlogo.svg";
import { css, } from "@emotion/react";
import styled from "@emotion/styled";

// Create a styled component for the div with slideStyles applied
const SlideDiv = styled.div`
  ${slideStyles}
`;


export function SlideOne() {
  return (
    // <SlideDiv>
    //   <div className="content flex justify-center">
    //     <Image
    //       priority={true}
    //       alt="slideshow image"
    //       src={plumlogo}
    //       // layout="fill"
    //       // objectFit="fit"
    //       width={350}
    //       height={250}
    //       style={{
    //         width: "50vw",
    //         height: "100vh",
    //       }}
    //     />
    //   </div>
    // </SlideDiv>
    <SlideDiv>
      <div className="content" style={{ position: "relative" }}>
        <Image
          priority={true}
          alt="slideshow image"
          src={plumlogo}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "100vh",
            background: "#522080",
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
              "linear-gradient(to bottom, rgb(141 39 235 / 7%), rgb(26 10 40 / 13%), #5d5d5d1c 100%)",
          }}
        />
        {/* <div
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
          <h1>Mobile and Desktop</h1>
          <p>Supports both mobile and desktop layouts</p>
        </div> */}
      </div>
    </SlideDiv>
  );
}

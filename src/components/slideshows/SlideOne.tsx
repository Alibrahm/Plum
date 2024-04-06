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
    <SlideDiv>
      <div className="content flex justify-center">
        <Image
          priority={true}
          alt="slideshow image"
          src={plumlogo}
          // layout="fill"
          // objectFit="fit"
          width={450}
          height={250}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>
    </SlideDiv>
  );
}

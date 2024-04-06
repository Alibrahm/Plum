"use client";
import { slideStyles } from "../../components/slideshows/Slideshow";
import Image from "next/image";
import plumlogo from "../../images/plumlogo.svg";


export function SlideOne() {
  return (
    <div style={slideStyles}>
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
    </div>
  );
}

"use client";
import { slideStyles } from "../../components/slideshows";
import Image from "next/image";
import profilePic from "../../public/plumslide3.jpg";

export function SlideTwo() {
  return (
    <div style={slideStyles}>
      <div
        className="content flex justify-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Image
          priority={true}
          alt="slideshow image"
          src={profilePic}
          // width={400}
          // height={400}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "100vh",
          }}
          // layout="fill"
        />
        {/* <div style={{ textAlign: "center" }}>
        <h1>Material Design</h1>
        <p>Built with Material design system</p>
      </div> */}
      </div>
    </div>
  );
}

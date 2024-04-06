"use client";
import { slideStyles } from "../../components/slideshows";
import Image from "next/image";
import slide2 from "../../public/plumslide2.jpg";

export function SlideThree() {
  return (
    <div style={slideStyles}>
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
          <h1>Mobile and Desktop</h1>
          <p>Supports both mobile and desktop layouts</p>
        </div>
      </div>
    </div>
  );
}

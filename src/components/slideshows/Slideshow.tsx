"use client";
import { css, SerializedStyles } from "@emotion/react";
import { Pagination } from "../../components/slideshows";
import Head from "next/head";
import { ReactNode, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import { FinishSlideshowBtn } from "./AppBtn";
import { useRouter } from "next/navigation";
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const backgroundColors = ["#522080", "red", "green"];
const radialGradient = `radial-gradient(#522080, #000000)`;

// style for every slide
export const slideStyles: SerializedStyles = css`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  color: #fff;
  position: relative;
  .content {
    margin-top: -1px;
  }
`;
 
export function Slideshow({ slides }: { slides: ReactNode[] }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;
  const handleNextSlide = () => {
    if (index < totalSlides - 1) {
      setIndex((prevIndex) => prevIndex + 1); // Increment index by 1
    } else {
      router.push("/login"); // Navigate to the "/onboarding" route
    }
  };

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          key="theme-color"
          content={backgroundColors[index]}
        />
      </Head>
      <div
        style={{
          backgroundColor:
            "linear-gradient(rgba(82, 32, 128, 0.427), rgba(26, 10, 40, 0.6), rgb(0, 0, 0) 93%)",
          transition: "background-color 1s ease-out",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <BindKeyboardSwipeableViews
          index={index}
          enableMouseEvents
          onChangeIndex={(i) => setIndex(i)}
        >
          {slides}
        </BindKeyboardSwipeableViews>
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: 20,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {index !== 0 && (
            <>
              <Pagination
                dots={3}
                index={index}
                onChangeIndex={(i) => setIndex(i)}
              />
              <FinishSlideshowBtn
                text={index === totalSlides - 1 ? `Get Started` : "Next"}
                onClick={handleNextSlide}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

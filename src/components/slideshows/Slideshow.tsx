"use client";
import { css } from '@emotion/react'
import { Pagination } from '../../components/slideshows'
import Head from 'next/head'
import { ReactNode, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import { FinishSlideshowBtn } from './AppBtn'

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews)

const backgroundColors = ["#522080", "red", "green"];
const radialGradient = `radial-gradient(#522080, #000000)`;

// style for every slide
export const slideStyles = css`
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
    margin-top: -32px;
  }
`

export function Slideshow({ slides }: { slides: ReactNode[] }) {
  const [index, setIndex] = useState(0)
  const totalSlides = slides.length

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
          backgroundColor: backgroundColors[index],
          transition: "background-color 1s ease-out",
          display: 'flex',
          flexDirection: 'column',
          overflow:'hidden'
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
          <Pagination
            dots={3}
            index={index}
            onChangeIndex={(i) => setIndex(i)}
          />
          <FinishSlideshowBtn
            text={index === totalSlides - 1 ? `Get Started` : "Skip"}
          />
        </div>
      </div>
    </>
  );
}

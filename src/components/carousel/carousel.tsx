"use client";
import SlideTwo from "../../components/kycslides/SlideTwo";
import { Carousel } from "flowbite-react";

export default function Component() {
  return (
    <div className="h-48 sm:h-64 xl:h-80 2xl:h-96 m-2">
      <Carousel slide={false}>
      <SlideTwo />
             <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

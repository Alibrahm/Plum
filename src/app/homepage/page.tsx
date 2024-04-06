// "use-client"
// import HomeWidgets from "../../components/widgets/gridLayout"

// export default function HomePage() {
//     return (
//         <HomeWidgets />
//     );
// }
"use client";
import {
  Slideshow,
  SlideOne,
  SlideTwo,
  SlideThree,
} from "../../components/slideshows";
import Login from "../login/page";
import { Global } from "@emotion/react";
import Head from "next/head"; // Import next/head

export default function Onboarding() {
  return (
    <>
      <Head>
        <title>Onboarding</title> {/* Set page title */}
      </Head>
      <Global
        styles={{
          body: {
            fontFamily: "system-ui, sans-serif",
            margin: 0,
          },
        }}
      />
      <Slideshow
        slides={[
          <SlideOne key="1" />,
          <SlideTwo key="2" />,
          <SlideThree key="3" />,
          // <Login key="4" />,
        ]}
      />
    </>
  );
}

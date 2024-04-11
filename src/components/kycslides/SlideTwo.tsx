// "use client";
// import { slideStyles } from "../../components/slideshows";
// // import  slideStyles  from "../../components/slidestyles";
// import Image from "next/image";
// import profilePic from "../../public/plumslide3.jpg";
// import { css } from '@emotion/react';
// import styled from "@emotion/styled";

// // Create a styled component for the div with slideStyles applied
// const SlideDiv = styled.div`
//   ${slideStyles}
// `;

// export function SlideTwo() {
//   return (
//     <SlideDiv>
//       <div className="content" style={{ position: "relative" }}>
//         <Image
//           priority={true}
//           alt="slideshow image"
//           src={profilePic}
//           sizes="100vw"
//           style={{
//             width: "100vw",
//             height: "100vh",
//           }}
//         />
//         <div
//           className="overlay"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background:
//               "linear-gradient(to bottom, rgba(82, 32, 128, 0.426), rgba(26, 10, 40, 0.6), #000000 93%)",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             textAlign: "center",
//             color: "white",
//             zIndex: 1, // Ensure text is above the overlay
//           }}
//         >
//           <h1>Plum PWA</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Natoque risus consectetur
//             nam odio laoreet
//           </p>
//         </div>
//       </div>
//     </SlideDiv>
//   );
// }

"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import plumlogo from "../../images/plumlogo.svg";
import { slideStyles } from "../../components/kycslides/Slideshow";
// import slideStyles  from "../../components/slidestyles";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Create a styled component for the div with slideStyles applied
const SlideDiv = styled.div`
  ${slideStyles}
`;
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export function SlideOne() {
  return (
    <SlideDiv>
      {/* <Box sx={{ minWidth: 275 }}> */}
      <Card variant="outlined" sx={{ width: "100%",p:0 }}>
        <CardContent
          sx={{
            background:
              "linear-gradient(to bottom, #522080, rgb(26 10 40 / 87%), #000000 100%)",
            color: "white",
          }}
        >
          <Image
            priority={true}
            alt="slideshow image"
            src={plumlogo}
            style={{
              width: "60px",
              height: "28px",
              background: "transparent",
            }}
          />
          <div
            style={{
              fontFamily: "Ubuntu",
              marginLeft: "9px",
              fontSize: "medium",
            }}
          >
            Balance Available
          </div>

          <div
            style={{
              fontFamily: "Ubuntu",
              marginLeft: "9px",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            $30,0000
          </div>
        </CardContent>
      </Card>
      {/* </Box> */}
      {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </SlideDiv>
  );
}

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

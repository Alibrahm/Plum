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

export function SlideTwo() {
  return (
    <SlideDiv>
      <Card variant="outlined" sx={{ width: "100%" ,p:0}}>
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
            Wallet Amount
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

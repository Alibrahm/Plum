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
import { Avatar } from "flowbite-react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import kenya from "../../public/images/KE.svg";

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

export default function SlideOne() {
  return (
    // <Card variant="outlined" sx={{width:'100%'}}>
        <CardContent
          sx={{
            background:
              "linear-gradient(to bottom, #522080, rgb(26 10 40 / 87%), #000000 100%)",
            color: "white",
          height: '18rem',
          // margin: '13px',
          borderRadius:'12px'
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
          <div className="flex justify-between">
          <div
            style={{
              fontFamily: "Ubuntu",
              marginLeft: "9px",
              fontSize: "medium",
            }}
          >
            Balance Available
          </div>
          <div className="flex flex-row">
          <Image
            priority={true}
            alt="slideshow image"
            src={kenya}
            style={{
              width: "60px",
              height: "28px",
              background: "transparent",
            }}
          />
          <span className="my-auto">KE</span>
          </div>
          </div>

<div className="flex flex-col">
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
          <span>Samuel Inchwara</span>
          </div>
        </CardContent>
    // </Card>
 
  );
}

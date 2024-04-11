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
import {
  Slideshow,
  SlideOne,
  SlideTwo,
  SlideThree,
} from "../../components/kycslides";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
  
    <Slideshow
      slides={[
        <SlideOne key="1" />,
        <SlideTwo key="2" />,
        <SlideThree key="3" />,
      ]}
    />
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ width: "100%", height: "auto",p:0 }}>
      <Card sx={{ width: "100%", height: "auto",p:0, }} >
        {card}
      </Card>
    </Box>
  );
}

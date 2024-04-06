"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function ActionAreaCard({ classes, images }: any) {
  return (
    <Card sx={{ maxWidth: "100%",height:340, borderRadius: "19px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 210,
            maxWidth: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          image={images}
          alt="class"
        />
        <CardContent sx={{ background: "#dbdbdb75" }}>
          <Typography color="text.secondary">Academic</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {classes}
          </Typography>
          <div className="flex justify-end">
            <ArrowCircleRightIcon sx={{ color: "#003366", fontSize: 40 }} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

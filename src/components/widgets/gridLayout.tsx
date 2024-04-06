"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Classes from "./cards";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1,mt:2, mx: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs>
          <Classes
            classes={"Chemistry"}
            images="https://images.ctfassets.net/cnu0m8re1exe/1v6Kh7bIsgVU4PA1Qi44bb/3e8e11c131620bb0080266a01a8cf36c/shutterstock_127915121.jpg?fm=jpg&fl=progressive&h=268&w=660&fit=fill"
          />
        </Grid>
        <Grid item xs>
          <Classes
            classes={"Biology"}
            images="https://healthinfo.healthengine.com.au/assets/DNA-genes1.jpg"
          />
        </Grid>
        <Grid item xs>
          <Classes
            classes={"Physics"}
            images="https://www.universetoday.com/wp-content/uploads/2009/09/rutherford-atom.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

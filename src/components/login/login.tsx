"use client";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Advent_Pro } from "next/font/google";
import { useRouter } from "next/navigation";
const Advent = Advent_Pro({
  weight: "700",
  subsets: ["latin"],
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "86vw",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    width:'100%',
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#E0E3E7",
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 4,
    padding: "4px !important", // override inline-style
  },
});

export default function CustomizedInputsStyled() {
  const router = useRouter();
    const handleProceed = () => {
      // Navigate to the kyc details reg
      router.push("/registration");
    };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        background:'#ffffff'
      }}
    >
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          position: "absolute",
          bottom: "18px",
          marginInline:'18px'
        }}
      >
        <div>
        <h2 className={Advent.className} style={{ fontSize: "53px",textAlign:'left'  }}>
          Enter Registration
        </h2>
        <h4 style={{ marginBottom: "2px",textAlign:'left' }}>
        Lorem ipsum dolor sit amet consectetur. Natoque risus consectetur
            nam odio laoreet
        </h4></div>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            First Name
          </InputLabel>
          <BootstrapInput placeholder="First Name" id="bootstrap-input" />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Last Name
          </InputLabel>
          <BootstrapInput placeholder="Last Name" id="bootstrap-input" />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Email
          </InputLabel>
          <BootstrapInput placeholder="Email" id="bootstrap-input" />
        </FormControl>

        <button
          style={{
            background: "#522080",
            color: "#ffffff",
            borderRadius: "8px",
            height: "2.9rem",
          }}
          onClick={handleProceed}
        >
          Next
        </button>

     
      </Box>
    </div>
  );
}
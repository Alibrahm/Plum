import React, { useState } from "react";
import OtpInput from "react-otp-input";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  useMediaQuery,
} from "@material-ui/core";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Advent_Pro } from "next/font/google";
const Advent = Advent_Pro({
  weight: "700",
  subsets: ["latin"],
});
export default function App() {
  const [otp, setOtp] = useState("");
  const isMediumScreen = useMediaQuery("(min-width:600px)");
  const router = useRouter();
  // Define paper width based on screen size
  const paperWidth = isMediumScreen ? 540 : 320;

  const paperStyle: React.CSSProperties = {
    height: "65vh",
    // position: "absolute",
    // bottom: "8px",
    boxShadow: "unset",
    // margin: "20px auto",
    width: "-webkit-fill-available",
  };
  const handleProceed = () => {
    // Navigate to the kyc details reg
    router.push("/login");
  };

  const muiStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
   background:'#ffffff',
    width: "-webkit-fill-available",
  };

    const cardPlacement: React.CSSProperties = {
      display: "flex",
      // justifyContent: "space-between",
      gap: '72px',
      bottom:'0.2rem',
      flexDirection: "column",
      textAlign: "center",
      position: "absolute",
   background:'#ffffff',
      width: "-webkit-fill-available",
    };
  
     const handleHomePage = () => {
       // Navigate to the /otp page
       router.push("/onboarding");
  };
  
  return (
    <Grid style={muiStyle}>
      <Paper elevation={2} style={paperStyle}>
        <Grid style={cardPlacement}>
          <div className="ml-4">
          <h2 className={Advent.className} style={{ fontSize: "52px" ,textAlign:'left',marginLeft:'4px'}}>
            Verify Phone Number
          </h2>
          <h4 style={{ marginBottom: "2px" ,textAlign:'left',marginLeft:'4px'}} className={Advent.className}>
          Lorem ipsum dolor sit amet consectetur. Natoque risus consectetur
            nam odio laoreet
          </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              //@ts-ignore
              separator={<span style={{ width: "6px" }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                border: "1px solid lightgray",
                borderRadius: "8px",
                width: "3rem",
                height: "3rem",
                fontSize: "12px",
                color: "#000",
                fontWeight: "400",
                marginInline: "4px",
                caretColor: "black",
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none",
              }}
            />
          </div>
          <button
            style={{
              display: "flex",
              border: "none",
              justifyContent: "center",
              color: "#522080",
              background: "inherit",
              textDecorationLine: "underline",
            }}
          >
            Resend Code
          </button>
          <div
            className="grid grid-cols-2 gap-4"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
              gap: "16px",
              marginInline: "14px",
              height: "2.7rem",
              marginBottom:'12px'
            }}
          >
            <button
              style={{
                borderRadius: "8px",
                border:'1px solid black'
              }}
            >
              Cancel
            </button>
            <button
              style={{
                background: "#522080",
                color: "#ffffff",
                borderRadius: "8px",
              }}
              onClick={handleProceed}
            >
              Confirm
            </button>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
}

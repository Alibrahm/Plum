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
// import LockOutlinedIcon from "@mui/icons/LockOutlined";
import LockOutlinedIcon from "@mui/icons-material/AddToQueue";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { styled } from "@mui/material/styles";
export default function App() {
  const [otp, setOtp] = useState("");
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  // Define paper width based on screen size
  const paperWidth = isMediumScreen ? 540 : 320;

  const paperStyle: React.CSSProperties = {
    padding: 20,
    height: "70vh",
    position: "absolute",
    bottom: "8px",
    boxShadow: "unset",
    margin: "20px auto",
    width: paperWidth,
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const muiStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
    bottom:'60px'
  };
  
  return (
    <Grid style={muiStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid style={muiStyle}>
          <h2>Verify Phone Number</h2>
          <h4 style={{ marginBottom: "37px" }}>
            An OTP has been sent to your Phone Number,please enter it to confirm
          </h4>
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
              renderSeparator={"-"}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <Grid
            // align="center"
            container
            style={{
              marginTop: "48px",
              gap: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
         
            <Button
              type="submit"
              color="primary"
              variant="contained"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              color="primary"
              variant="contained"
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

"use-client";
// import React, { useState } from "react";
// import "../../public/styles/Login.css"; // Import CSS file for styling (see below)
// import Head from "next/head"; // Import next/head
// import { useRouter } from "next/navigation";
// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email);
//       console.log("Password:", password);
//       router.push("/onboarding"); 
//   };

//   return (
//     <div
//       className="overlay"
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background:
//           "linear-gradient(to bottom, rgba(82, 32, 128, 0.426), rgba(26, 10, 40, 0.6), #000000 93%)",
//       }}
//     >
//       <Head>
//         <title>Login</title>
//       </Head>

//       <div
//         style={{
//           fontFamily: "Ubuntu",
//           fontSize: "2.1rem",
//           fontWeight: "bold",
//           margin: "19px",
//           marginTop: "49%",
//         }}
//       >
//         Get Started
//       </div>

//       <div
//         style={{
//           fontFamily: "Ubuntu",
//           fontSize: "1.7rem",
//           fontWeight: "bold",
//           margin: "19px",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur. Arcu ac integer adipiscing et.
//       </div>
//       <div className="login-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Enter Phone Number"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Next</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
   const isMediumScreen = useMediaQuery("(min-width:600px)");

   // Define paper width based on screen size
   const paperWidth = isMediumScreen ? 540 : 320;

  const paperStyle: React.CSSProperties = {
    padding: 20,
    height: "70vh",
    position: 'absolute',
    bottom:'8px',
    boxShadow: "unset",
    margin: "20px auto",
    width: paperWidth,
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

   const muiStyle: React.CSSProperties = {
     display: "flex",
     justifyContent: "center",
   };

    const handleOtpGeneration = () => {
      // Navigate to the /otp page
      router.push("/otp");
    };


  return (
    <Grid style={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid style={muiStyle}>
          <div>Get Started, Lorem Ipsum </div>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleOtpGeneration}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
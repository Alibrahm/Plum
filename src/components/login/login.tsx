"use-client";
import React, { useState } from "react";
import "../../public/styles/Login.css"; // Import CSS file for styling (see below)
import Head from "next/head"; // Import next/head
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
      console.log("Password:", password);
      router.push("/onboarding"); 
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div
        style={{
        fontFamily: "Ubuntu",
        fontSize: "2.1rem",
        fontWeight: "bold",
        margin: "19px",
          marginTop:"49%"
        }}
      >
        Get Started
      </div>

      <div
        style={{
          fontFamily: "Ubuntu",
          fontSize: "1.7rem",
          fontWeight: "bold",
          margin: "19px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Arcu ac integer adipiscing et.
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter Phone Number"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
};

export default Login;

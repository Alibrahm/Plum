"use client";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("../../components/login/login"));

export default Login;


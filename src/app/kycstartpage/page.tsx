// "use-client"
// import HomeWidgets from "../../components/widgets/gridLayout"

// export default function HomePage() {
//     return (
//         <HomeWidgets />
//     );
// }
"use client";
import {
  Slideshow,
  SlideOne,
  SlideTwo,
  SlideThree,
} from "../../components/slideshows";
import Login from "../login/page";
import React, { useState, useEffect } from 'react'
import { Global } from "@emotion/react";
import Head from "next/head"; // Import next/head
import Image from "next/image";
import profilePic from "../../public/plumslide3.jpg";
import { useRouter } from "next/navigation";
import InstallButton from "../../components/Install/AddToHomeScreen"

import useUserAgent from '@/hooks/useUserAgent'
export default function Onboarding() {
  const router = useRouter();
    const handleProceed = () => {
      // Navigate to the kyc details reg
      router.push("/onboarding");
    };

    const [welcomeMessage, setWelcomeMessage] = useState<string>('Checking device...');
    const { isMobile, userAgentString ,userAgent } = useUserAgent();
  
    useEffect(() => {
      const welcomeMessage = isMobile ? 'You are on a mobile device.' : 'You are on a desktop device. Please use a mobile device to view this app.';
      setWelcomeMessage(welcomeMessage);
    }, [isMobile]);
    console.log("welcomeMessage",welcomeMessage)

  return (
    <>
{isMobile&&<InstallButton />}
      <Head>
        <title>Onboarding</title> {/* Set page title */}
      </Head>
      <div className="content" style={{ position: "relative" }}>
        {/* <Image
          priority={true}
          alt="slideshow image"
          src={profilePic}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        /> */}
       
        <div
          className="overlay"
          style={{
           
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow:'hidden',
            background:
             "linear-gradient(to bottom, #522080, #000000 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "50%",
            width:'100%',
            transform: "translate(-50%, -5%)",
            textAlign: "center",
            color: "white",
            zIndex: 1, // Ensure text is above the overlay
          }}
        >
          <div className='text-left text-6xl ml-3 font-bold '>User Verification</div>
          <p className='my-6'>
            Complete your KYC verification
          </p>
          

<div className="w-full text-gray-900   rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <button type="button" className="relative text-white inline-flex items-center w-full px-4 py-6 text-sm font-medium rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        Lorem Ipsum
    </button>
    <button type="button" className="relative text-white inline-flex items-center w-full px-4 py-6 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
        </svg>
        Lorem Ipsum
    </button>
    <button type="button" className="relative text-white inline-flex items-center w-full px-4 py-6 text-sm font-medium  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
        </svg>
        Lorem Ipsum
    </button>
    <button type="button" className="relative text-white inline-flex items-center w-full px-4 py-6 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
        </svg>
        Lorem Ipsum
    </button>
</div>

<div className="my-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mx-2">
<button type="button" className="p-4 text-xs font-medium text-center text-white bg-[#522080] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Begin KYC Verification</button>
<button type="button" className="p-4 border border-t-slate-500 text-xs font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleProceed}>I&apos;ll do this later</button>

</div>

        </div>
      </div>
    </>
  );
}

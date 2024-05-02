"use client";
import { Button } from '@mui/material';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import { Advent_Pro } from "next/font/google";
import { useRouter } from "next/navigation";
const Advent = Advent_Pro({
  weight: "700",
    subsets: ["latin"],
});

export default function Example() {
const router = useRouter();
   const handlePhoneInput = () => {
     // Navigate to the /otp page
     router.push("/otp");
   };
  const [value, setValue] = useState();
    return (
      <div
        className="content h-[94vh]"
        style={{
          height: "100vh",
        }}
      >
        <div
          className="bg-[#ffffff] w-screen h-full absolute mb-0 text-gray-800"
          // style={{
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   width: "100%",
          //   height: "100%",
          // }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "50%",
            width: "80%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 1, // Ensure text is above the overlay
          }}
        >
          <div
            style={{ color: "black", fontSize: "45px",textAlign:'left' }}
            className='text-blue-600 mb-6 text-[45px]'
          >
            Get Started{" "}
          </div>
          <p 
          style={{ color: "black", marginBottom:'42px'}}
          >
            Lorem ipsum dolor sit amet consectetur. Natoque risus consectetur
            nam odio laoreet
          </p>

          <PhoneInput
            international
            defaultCountry="KE"
            placeholder="Enter phone number"
            countryCallingCodeEditable={false}
            value={value}
            className="flex border text-gray-800"
            //@ts-ignore
            onChange={setValue}
            style={{position:'relative',top:'45px',minHeight:'44px',borderRadius:'10px',}}
            containerStyle={{ backgroundColor: "black" ,position:'relative',top:'45px'}}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{
              display: "flex",
              position: "absolute",
              marginTop: "56px",
              background: "#522080",
              textTransform: "none",
              padding: "11px 17px",
            }}
            className={Advent.className}
            fullWidth
            onClick={handlePhoneInput}
          >
            Next
          </Button>
        </div>
      </div>
    );
}
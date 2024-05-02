"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ModeStandbyRoundedIcon from "@mui/icons-material/ModeStandbyRounded";
import KycPriviliges from "../carousel/carousel";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import Transactions from "../../components/TransactList/transactions";
import BottomNav from "../../components/layout/bottomNav";
import Image from "next/image";
import sendmoney from "../../public/images/bi_send-fill.svg";
import Home from "../../public/images/home.svg";
import Transact from "../../public/images/transact.svg";
import Profile from "../../public/images/profile.svg";
import Faq from "../../public/images/faq.svg";
function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) =>
    Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <><Box sx={{ pb: 0 }} ref={ref}>
    
      <CssBaseline />

      <Box sx={{ p: 0 }}>
      <KycPriviliges />
        <div className="grid grid-cols-2 gap-4 align-center  p-4 w-full ">
          <button
            aria-label="delete"
            disabled
            color="primary"
            className=" my-auto bg-[#522080] shadow-md text-sm rounded-md text-[#FFFFFF]"
          >
            <div className="m-2 mx-auto rounded-lg px-4">
              <CallMadeRoundedIcon
                fontSize="small"
                sx={{
                  background: "#ffffff",
                  fill: "black",
                  borderRadius: "50%",
                }} />
              <span className="mx-2 p-1 my-auto">Send Money</span>
            </div>
          </button>
          <button
            aria-label="delete"
            disabled
            color="primary"
            className="my-auto border border-[#522080] text-sm rounded-md text-[#522080]"
          >
            <div className="m-2  rounded-lg px-3">
              <ModeStandbyRoundedIcon
                fontSize="small"
                sx={{
                  background: "#ffffff",
                  fill: "black",
                  borderRadius: "50%",
                }} />{" "}
              <span className="mx-1 my-auto p-1">Withdraw</span>
            </div>
          </button>
        </div>
      </Box>

      {/* <List sx={{ maxHeight: "540px", height: "525px", overflow: "scroll" }}>
      {messages.map(({ primary, secondary, person }, index) => (
        <ListItemButton key={index + person}>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={person} />
          </ListItemAvatar>
          <ListItemText primary={primary} secondary={secondary} />
        </ListItemButton>
      ))}
    </List> */}

      <Transactions />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          } }
          sx={{bottom:'2px',width:'100%',height:'65px',position:'absolute',boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',}}
        >
          <BottomNavigationAction 
          // label="Recents"
           icon={
           <Image
          priority={true}
          alt="slideshow image"
          src={Home}
          sizes="100vw"
          style={{
            width: "3rem",
            height: "3rem",
          }}
        /> 
        } />
          <BottomNavigationAction 
          // label="Favorites"
           icon={<Image
            priority={true}
            alt="slideshow image"
            src={Transact}
            sizes="100vw"
            style={{
              width: "2rem",
              height: "2rem",
            }}
          /> } />
          <BottomNavigationAction
            // label="Archive"
            icon={   <Image
              priority={true}
              alt="slideshow image"
              src={sendmoney}
              sizes="100vw"
              style={{
                width: "3rem",
                height: "3rem",
              }}
            /> } />
          <BottomNavigationAction
          //  label="Archive" 
           icon={<Image
            priority={true}
            alt="slideshow image"
            src={Profile}
            sizes="100vw"
            style={{
              width: "3rem",
              height: "2.5rem",
            }}
          />} />
          <BottomNavigationAction 
          // label="Archive" 
          icon={<Image
            priority={true}
            alt="slideshow image"
            src={Faq}
            sizes="100vw"
            style={{
              width: "3rem",
              height: "2.5rem",
            }}
          />} />
        </BottomNavigation>
      </Paper>
    </Box></>
  );
}

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];

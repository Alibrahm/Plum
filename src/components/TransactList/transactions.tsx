// "use client";
// import * as React from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
// import { Grid, Paper, Typography, } from "@material-ui/core";
// import Stack from "@mui/material/Stack";
// import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
// import { Badge } from "flowbite-react";
// import { HiCheck, HiClock } from "react-icons/hi";

// export default function FolderList() {
//   return (
//     <List sx={{ marginTop: 1, bgcolor: "background.paper" }}>
//       <div className="grid grid-cols-2 gap-4">
//         <ListItem>
//           <CallMadeRoundedIcon
//             fontSize="medium"
//             sx={{
//               background: "#ffffff",
//               fill: "black",
//               borderRadius: "50%",
//               border: "1px solid lightgray",
//               padding: "3px",
//             }}
//           />
//           <ListItemText
//             primary="Musa Kanji"
//             sx={{ marginLeft: 1 }}
//             secondary={
//               <div className="flex gap-2 my-0.5">
//                 <Typography
//                   style={{ display: "inline" }}
//                   component="span"
//                   variant="body2"
//                 >
//                   9:00am
//                 </Typography>
//                 <Badge color="success">Success</Badge>
//               </div>
//             }
//           />
//         </ListItem>

//         <ListItem>
//           <ListItemText primary="John Doe" secondary="Jan 9, 2014" />
//         </ListItem>
//       </div>

//       <ListItem>
//         <ListItemAvatar>
//           <Avatar>
//             <WorkIcon />
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Work" secondary="Jan 7, 2014" />
//       </ListItem>
//       <ListItem>
//         <ListItemAvatar>
//           <Avatar>
//             <BeachAccessIcon />
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Vacation" secondary="July 20, 2014" />
//       </ListItem>
//     </List>
//   );
// }

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import { Badge } from "flowbite-react";
import sendmoney from "../../images/sendmoney.svg";
export default function FolderList() {
  // Define an array of data for the list items
  const listItems = [
    {
      primary: "Musa Kanji",
      avatarIcon: <CallMadeRoundedIcon sx={{color:'#522080',background:'transparent !important',height:'28px',width:'28px'}}/>,
      secondary: "9:00am",
      badgeColor: "success",
      badgeContent: "Success",
    },
    {
      primary: "John Doe",
      avatarIcon: <CallMadeRoundedIcon sx={{color:'#522080',height:'28px',width:'28px'}}/>,
      secondary: "June,20 2024",
      badgeColor: "warning",
      badgeContent: "Error",
    },
    {
      primary: "John Doe",
      avatarIcon: <CallMadeRoundedIcon sx={{".& .MuiAvatar-root":{color:'#522080',background:'#ffffff',height:'28px',width:'28px',}}}/>,

      secondary: "Jan 9, 2014",
      badgeColor: "error",
      badgeContent: "Error",
    },
    {
      primary: "Juma Nature",
      secondary: "Jan 9, 2021",
      badgeColor: "error",
      badgeContent: "Error",
    },
    {
      primary: "Musa Sole",
      secondary: "Jan 9, 2014",
      badgeColor: "error",
      badgeContent: "Error",
    },
 
  ];

  return (
    <List sx={{ marginTop: 1, bgcolor: "background.paper" }}>
      {listItems.map((item, index) => (
        <ListItem key={index}>
          {/* Check if avatarIcon exists, if yes, render it */}
          {item.avatarIcon && (
            <ListItemAvatar>
              <Avatar>{item.avatarIcon}</Avatar>
            </ListItemAvatar>
          )}
          {/* Render primary and secondary text */}
          <ListItemText
            primary={item.primary}
            secondary={item.secondary}
          />
          {/* If badgeColor and badgeContent exist, render Badge component */}
          {item.badgeColor && item.badgeContent && (
            <Stack direction="column" alignItems="center">
              {/* <Typography variant="body2">{item.secondary}</Typography> */}
              <Badge color={item.badgeColor}>{item.badgeContent}</Badge>
            </Stack>
          )}
        </ListItem>
      ))}
    </List>
  );
}

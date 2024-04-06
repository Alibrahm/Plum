"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { Box, CardActionArea, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});


const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Sidebar({ classes, images }: any) {
      const [open, setOpen] = React.useState(true);

      const handleDrawerOpen = () => {
        setOpen(!open);
      };
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          background: "#003366",
          "& > :not(style)": {
            width: "100%",
            height: 96,
          },
        }}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/b427/6c0d/15238afa2999f44b76d86ba8f5ed4fb0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpnzAcnUG6~mhtnv~KE5e~4420Bos1hFh6I8p~PDTFpiNsby~imoVOcxVkL7FJaksT7gEQAdNCDzvfcb6l-7tCMyvUQetiFpi44I-VjHmAXZxAPZM00iGHxVYp3LxyBCO6uduURAq-3O~~XhKp9WWjOQ9zFpIJ5kNMgcvUs6CYPlAQOSoIaCwPtl2rTKMJulzV5Je9GgNKAfGbSREPctv0AVlOX01fD02tjLXuxoZaqlMp8B2j663N1VNAjphMN~uN-RXM1E3GK0TC0e~V3Ye3j2RhiuwDIlFglHGAhwr~M7hTKD03vc6d7L8JeFcc0YyqBbfUSby9ijt0kaFlwkeg__"
          width={500}
          height={500}
          blurDataURL="https://s3-alpha-sig.figma.com/img/b427/6c0d/15238afa2999f44b76d86ba8f5ed4fb0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KpnzAcnUG6~mhtnv~KE5e~4420Bos1hFh6I8p~PDTFpiNsby~imoVOcxVkL7FJaksT7gEQAdNCDzvfcb6l-7tCMyvUQetiFpi44I-VjHmAXZxAPZM00iGHxVYp3LxyBCO6uduURAq-3O~~XhKp9WWjOQ9zFpIJ5kNMgcvUs6CYPlAQOSoIaCwPtl2rTKMJulzV5Je9GgNKAfGbSREPctv0AVlOX01fD02tjLXuxoZaqlMp8B2j663N1VNAjphMN~uN-RXM1E3GK0TC0e~V3Ye3j2RhiuwDIlFglHGAhwr~M7hTKD03vc6d7L8JeFcc0YyqBbfUSby9ijt0kaFlwkeg__"
          alt="Picture of the author"
        />
      </Box>
      <List>
        {["Dashboard", "Timetable", "Teaching", "Chat"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

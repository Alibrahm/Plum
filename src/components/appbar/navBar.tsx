"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Image from "next/image";
import plumlogout from "../../public/plumlogout.svg";
import plumNotifications from "../../public/plummessage.svg";
import Badge from "@mui/material/Badge";
import plumlogo from "../../images/plumlogo.svg";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to bottom, #522080,  #000000 100%)",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        minHeight: "84px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ marginTop: "10px" }}>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Image
              priority={true}
              alt="plum"
              src={plumlogo}
              style={{
                width: "200px",
                height: "20px",
                marginLeft: "-18px",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "none" }, mr: 1 }}>
            <Image
              priority={true}
              alt="plum"
              src={plumlogo}
              style={{
                width: "200px",
                height: "20px",
                marginLeft: "-18px",
              }}
            />
          </Box>

          <Box
            sx={{
              mr: 9,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Ubuntu",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              fontSize: "10px",
              mb: "9px",
            }}
          >
            Good Morning,
            <Typography
              variant="body2"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Ubuntu",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                width: "min-content",
                marginLeft: -10,
                fontSize: "18px",
              }}
            >
              Samuel
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Notifications">
              <Badge
                badgeContent={4}
                overlap="circular"
                color="primary"
                sx={{
                  "& .MuiBadge-badge": {
                    background: "#d21b19",
                  },
                }}
              >
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 1, background: "#ffffff !important" }}
                >
                  <Image
                    priority={true}
                    alt="messages"
                    src={plumNotifications}
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </IconButton>
              </Badge>
            </Tooltip>

            <Tooltip title="Logout">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ ml: 2, background: "#ffffff !important" }}
              >
                <Image
                  priority={true}
                  alt="slideshow image"
                  src={plumlogout}
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

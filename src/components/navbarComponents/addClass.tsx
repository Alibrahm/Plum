"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  borderRadius:'14px',
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [CreateClass, setCreateClass] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCreateClass(false);
  };

   const handleCreateClass = () => {
     setCreateClass(true);
   };
  return (
    <>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Add
            sx={{
              color: "black",
              fontSize: "32px",
              border: "1px solid lightgray",
              borderRadius: "50%",
            }}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleCreateClass}>Create Class</MenuItem>
          <MenuItem onClick={handleClose}>Join Class</MenuItem>
        </Menu>
      </div>

      <Modal
        open={CreateClass}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 className="font[Ubuntu] text-md font-bold">Create Class</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex justify-end">
            <div className="flex">
              <Button onClick={handleClose}>Create </Button>
              <Button onClick={handleClose}>Cancel </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

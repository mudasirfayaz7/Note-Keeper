import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography className="text-secondary me-2 fs-6 fw-bold d-none d-md-block">
          Mudasir Fayaz
          <KeyboardArrowDownIcon />
        </Typography>

        <Tooltip title="Account settings">
          <IconButton>
            <Avatar
              sx={{ width: 32, height: 32 }}
              alt="Remy Sharp"
              src="https://scontent.fsxr1-1.fna.fbcdn.net/v/t31.18172-8/22550112_1945742069083981_1701312093501692257_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=j9HkoQTAWPoAX9xPPet&_nc_ht=scontent.fsxr1-1.fna&oh=ab7973ec8249105f67d0e450458e0367&oe=617D36BF"
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: "20px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="mb-md-3 mb-0">
          <Avatar /> Profile
        </MenuItem>
        <br />
        <MenuItem className="mb-md-3 mb-0">
          <Avatar /> My account
        </MenuItem>
        <br />
        <Divider />
        <MenuItem className="my-md-2 my-0">
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add Another Account
        </MenuItem>
        <br />
        <MenuItem className="mb-md-2 mb-0">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>{" "}
        <br />
        <MenuItem className="mb-md-2 mb-0">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>{" "}
        <br />
      </Menu>
    </React.Fragment>
  );
}

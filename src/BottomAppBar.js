import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { AppBar } from "@mui/material";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  right: 34,
});

export default function PersistentDrawerLeft(props) {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className="text-white"
          style={{ backgroundColor: props.darkMode2 }}
          sx={{ top: "auto", bottom: 0 }}
          variant="outlined"
          elevation="0"
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <StyledFab
              onClick={props.onShow}
              className="bg-primary text-white"
              aria-label="add"
            >
              <AddIcon />
            </StyledFab>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

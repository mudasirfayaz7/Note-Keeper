import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        className="fixed-bottom bg-info"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="text-light"
          label="Notes"
          icon={<StickyNote2Icon />}
        />
        <BottomNavigationAction
          className="text-light"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          className="text-light"
          label="Nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

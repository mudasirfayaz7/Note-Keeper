import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const currentDate = new Date().toLocaleDateString();

function Note(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let content = props.content;
  let newContent = content.substring(0, 160) + " ....";
  let nullConent = "....";

  let title = props.title;
  let newTitle = title.substring(0, 20) + " .....";

  if (title.length > 20) {
    title = newTitle;
  }

  if (content.length > 160) {
    content = newContent;
  } else if (content.length < 1) {
    content = nullConent;
  }

  function handleDelete() {
    props.onDelete(props.id);
    setAnchorEl(null);
  }

  return (
    <Card
      sx={{ minWidth: 275 }}
      variant="outlined"
      style={{ backgroundColor: "#B5EAEA" }}
      className="border-light"
    >
      <div className="d-flex justify-content-between align-items-center px-2">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Typography class="date-text my-2">{currentDate}</Typography>

        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "10ch",
              padding: "0 10px",
            },
          }}
        >
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          <br />
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </Menu>
      </div>
      <CardContent className="text-secondary pb-2 pt-0">
        <Typography class="Note-heading text-dark mt-3  mb-0">
          {title}
        </Typography>

        <Typography class="Note-content" variant="body2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Note;

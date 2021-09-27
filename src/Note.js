import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const currentDate = new Date().toLocaleDateString();

function Note(props) {
  let content = props.content;
  let newContent = content.substring(0, 100) + " ....";
  let nullConent = "....";

  if (content.length > 100) {
    content = newContent;
  } else if (content.length < 1) {
    content = nullConent;
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: props.darkMode1 }}>
      <CardContent className="text-white">
        <CardActions>
          <Typography
            sx={{ fontSize: 13 }}
            color="palatte.primary.light"
            gutterBottom
          >
            {currentDate}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton onClick={handleClick} size="small">
            <DeleteIcon />
          </IconButton>
        </CardActions>

        <Typography variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
}

export default Note;

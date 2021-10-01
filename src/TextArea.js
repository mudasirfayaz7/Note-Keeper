import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function TextArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(noteContent);
    setNoteContent({
      title: "",
      content: "",
    });
    event.preventDefault();
    var x = document.getElementById("box");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div id="box" className="box fixed">
      <div className="card  bg-info">
        <div className="card-body  bg-info">
          <form action="/">
            <input
              className=" text-white bg-info"
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Note Title"
              autoComplete="off"
              value={noteContent.title}
              required
            />
            <br />
            <textarea
              className="text-white bg-info"
              onChange={handleChange}
              name="content"
              rows="2"
              placeholder="Note Content"
              value={noteContent.content}
              required
            ></textarea>
            <br />
            <div className="d-flex justify-content-between text-align-center mt-4">
              <Fab
                className=" text-secondary"
                type="submit"
                variant="extended"
                aria-label="add"
                onClick={submitNote}
                style={{ backgroundColor: "#EEEEEE" }}
              >
                <AddIcon />
                <span className="ms-2 fw-bold text-secondary">Add Note</span>
              </Fab>

              <div
                style={{ cursor: "pointer" }}
                className="mt-auto text-white"
                onClick={props.onHide}
              >
                <CloseIcon />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

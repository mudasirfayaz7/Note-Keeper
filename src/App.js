import * as React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TextArea from "./components/TextArea";
import Note from "./components/Note";
import Masonry from "react-masonry-css";
import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import SimpleBottomNavigation from "./components/BottomNavigation";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  right: 34,
});

function App() {
  const [notes, setNotes] = React.useState([]);
  const breakpoints = {
    default: 4,
    1174: 3,
    894: 2,
    602: 1,
  };

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function showBox() {
    var x = document.getElementById("box");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function showSearchBar() {
    var x = document.getElementById("Search-Bar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <section>
      <Header onShow={showSearchBar} />
      <SearchBar />
      <section className="p-3 pb-5 mb-2">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </Masonry>
      </section>

      <TextArea onAdd={addNote} />

      <div class="Add-btn">
        <StyledFab
          onClick={showBox}
          className="text-white bg-info"
          aria-label="add"
        >
          <AddIcon />
        </StyledFab>
      </div>
      <SimpleBottomNavigation />
    </section>
  );
}

export default App;

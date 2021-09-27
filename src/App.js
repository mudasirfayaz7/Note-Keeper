import React, { useState } from "react";
import BottomAppBar from "./BottomAppBar";
import Header from "./Header";
import TextArea from "./TextArea";
import Note from "./Note";
import Masonry from "react-masonry-css";
function App() {
  let darkPrimary = "#003157";
  let darkMain = "#001a2e";

  const [notes, setNotes] = useState([]);
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
  function hideBox() {
    var x = document.getElementById("box");
    x.style.display = "none";
  }
  function showMenuBar() {
    var x = document.getElementById("menuBar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <section>
      <Header darkMode1={darkPrimary} />

      <section className="p-3 pb-5 mb-2">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notes.map((noteItem, index) => {
            return (
              <Note
                darkMode1={darkPrimary}
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

      <TextArea
        onHide={hideBox}
        onAdd={addNote}
        darkMode1={darkPrimary}
        darkMode2={darkMain}
      />
      <BottomAppBar
        onShow={showBox}
        onClickMenu={showMenuBar}
        darkMode2={darkMain}
      />
    </section>
  );
}

export default App;

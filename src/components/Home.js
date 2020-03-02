import React, { useState, useEffect } from "react";
import notesData from "../data.js";

function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    return setNotes(notesData);
  }, []);

  return (
    <div>
      {notes.map(note => {
        return (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;

import React from "react";

function CreateNote() {
  const [noteTitle, titleUpdate] = React.useState("");
  const [noteBody, bodyUpdate] = React.useState("");
  const submitNote = () => {
    const note = {
      title: noteTitle,
      body: noteBody
    };
    // take the note and send it toss the ether.
  };
  return (
    <div className="App">
      <h1>Notes</h1>
      <input
        type="text"
        placeholder="title"
        value={noteTitle}
        onChange={e => titleUpdate(e.target.value)}
      />
      <textarea
        placeholder="add note"
        value={noteBody}
        onChange={e => bodyUpdate(e.target.value)}
      />
      <button onClick={submitNote} type="button">
        Submit
      </button>
    </div>
  );
}

export default CreateNote;

import React from "react";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("savedNotes")) || []
  );

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    //this do the same that the other code but i liked less
    // let arrayNotes, indexOfUpdatedNote, updatedNote;
    // setNotes(oldNotes => {
    //    arrayNotes = oldNotes.map((oldNote, index) => {
    //     return oldNote.id === currentNoteId ? (
    //         indexOfUpdatedNote = index,
    //         updatedNote = { ...oldNote, body: text }
    //         )
    //       : (oldNote);
    //   });
    //   arrayNotes.splice(indexOfUpdatedNote, 1)
    //   arrayNotes.unshift(updatedNote)
    //   return arrayNotes
    // }
    // );

    //put the most recently modified note at the top
    const newArray = [];
    setNotes((oldNotes) => {
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? newArray.unshift({ ...oldNote, body: text })
          : newArray.push(oldNote);
      });
      return newArray;
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(event, noteIde) {
    event.stopPropagation();
    setNotes(oldNotes => oldNotes.filter((note) => note.id !== noteId));
  }
    
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

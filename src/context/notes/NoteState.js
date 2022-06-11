import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMzFkODI1YzU3NGY1ODc5NjQ5OWNlIn0sImlhdCI6MTY1NDg1NzE1M30.CnxRxZ8M91NveV1AIJFtTsRBOuy6GTClZFcqR6etXwc"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMzFkODI1YzU3NGY1ODc5NjQ5OWNlIn0sImlhdCI6MTY1NDg1NzE1M30.CnxRxZ8M91NveV1AIJFtTsRBOuy6GTClZFcqR6etXwc"
      },
      body: JSON.stringify({title, description, tag})
    });
    
    setNotes(notes.concat(notes));
  }

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhMzFkODI1YzU3NGY1ODc5NjQ5OWNlIn0sImlhdCI6MTY1NDg1NzE1M30.CnxRxZ8M91NveV1AIJFtTsRBOuy6GTClZFcqR6etXwc"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;
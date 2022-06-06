import React, { useState } from 'react'
import NoteContext from './noteContext'


const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "627798614cf29fa6935bf339",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu stven grant",
      "tag": "YouTube",
      "date": "2022-05-08T10:16:01.767Z",
      "__v": 0
    },
    {
      "_id": "62779b0c62b26ag8ba769e70a",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu Mark spector",
      "tag": "YouTube",
      "date": "2022-05-08T10:27:24.875Z",
      "__v": 0
    },
    {
      "_id": "627798614cf29fua6935bf339",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu stven grant",
      "tag": "YouTube",
      "date": "2022-05-08T10:16:01.767Z",
      "__v": 0
    },
    {
      "_id": "62779b0c62b26ma8ba769e70a",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu Mark spector",
      "tag": "YouTube",
      "date": "2022-05-08T10:27:24.875Z",
      "__v": 0
    },
    {
      "_id": "627798614cf29fa6h935bf339",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu stven grant",
      "tag": "YouTube",
      "date": "2022-05-08T10:16:01.767Z",
      "__v": 0
    },
    {
      "_id": "62779b0c62b26a8sba769e70a",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu Mark spector",
      "tag": "YouTube",
      "date": "2022-05-08T10:27:24.875Z",
      "__v": 0
    },
    {
      "_id": "627798614cf29fa693d5bf339",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu stven grant",
      "tag": "YouTube",
      "date": "2022-05-08T10:16:01.767Z",
      "__v": 0
    },
    {
      "_id": "62779b0c62b26a8ba76d9e70a",
      "user": "627791e92f90360bd0590846",
      "title": "Hello ji",
      "description": "Mai hu Mark spector",
      "tag": "YouTube",
      "date": "2022-05-08T10:27:24.875Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  //Add a note
  const addNote = (title, description, tag) => {
    //TO DO API CALL
    console.log("Adding a new note");
    const note = {
      "_id": "627798614wctytyf29eeefa6h935bf339",
      "user": "627791e92f90360bd0590846",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-05-08T10:16:01.767Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  //Delete a note
  const deleteNote = (id) => {
    console.log('Deleting the note with the id ' + id);
    const newNotes = notes.filter((note) => { return note._id!==id });
    setNotes(newNotes);
  }
  //Edit a Note
  const editNote = (id, title, description, tag) => {

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
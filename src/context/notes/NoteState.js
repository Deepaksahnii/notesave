import React, {useState} from 'react'
import NoteContext from './noteContext'


const NoteState = (props) => {
const notesInitial= [
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

  const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value= {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
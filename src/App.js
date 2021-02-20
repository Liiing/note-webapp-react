import './App.scss';
import React, { useState } from 'react';
import NavBar from './NavBar';
import NoteList from './NoteList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [noteList, setNoteList] = useState([
    {
      uuid: uuidv4(),
      title: "title",
      content: "content",
    }
  ]);

  function onNoteAttributeChange(attribute, uuid, e) {
    const note = getNoteByUuid(uuid);
    const value = e.target.value;

    note[attribute] = value;

    setNoteList([...noteList]);
  }

  function getNoteByUuid(uuid) {
    return noteList.find(note => note.uuid === uuid);
  }

  function getNoteIndexByUuid(uuid) {
    return noteList.findIndex(note => note.uuid === uuid);
  }

  function onDeleteNote(uuid) {
    const copiedNoteList = [...noteList];
    const deleteNoteIndex = getNoteIndexByUuid(uuid);

    copiedNoteList.splice(deleteNoteIndex, 1);
    setNoteList(copiedNoteList);
  }

  return (
    <>
      <NavBar/>
      <NoteList
        noteList={noteList}
        onNoteAttributeChange={onNoteAttributeChange}
        onDeleteNote={onDeleteNote}/>
    </>
  );
}

export default App;
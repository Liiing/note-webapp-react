import './App.scss';
import React, { useState } from 'react';
import NavBar from './NavBar';
import NoteList from './NoteList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [noteList, setNotsList] = useState([
    {
      uuid: uuidv4(),
      title: "title",
      content: "content",
    }
  ]);

  return (
    <>
      <NavBar/>
      <NoteList noteList={noteList}/>
    </>
  );
}

export default App;
import './App.scss';
import React, { useState } from 'react';
import NavBar from './NavBar';
import NoteList from './NoteList';

function App() {
  const [noteList, setNotsList] = useState([
    {
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
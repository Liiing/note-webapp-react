import { useSelector } from 'react-redux';
import Note from './Note'

function NoteList() {

const noteList = useSelector(state => state.noteList);
    const renderedNoteList = noteList.map(note => (
       <Note
        key={note.uuid}
        uuid={note.uuid}/>
    ))

    return (
        <div className="container">
            { renderedNoteList }
        </div>
  );
}

export default NoteList;
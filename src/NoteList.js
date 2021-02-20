import Note from './Note'

function NoteList(props) {
    const renderedNoteList = props.noteList.map(note => (
       <Note title={note.title} content={note.content} key={note.uuid}/>
    ))

    return (
        <div className="container">
            { renderedNoteList }
        </div>
  );
}

export default NoteList;
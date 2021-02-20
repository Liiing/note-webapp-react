import Note from 'Note'

function NoteList(props) {
    const renderedNoteList = props.noteList.map(note => (
       <Note title={note.title} content={note.content}/>
    ))

    return (
        <div className="container">
            { renderedNoteList }
        </div>
  );
}

export default NoteList;
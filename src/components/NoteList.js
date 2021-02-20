import Note from './Note'

function NoteList({noteList, onNoteAttributeChange, onDeleteNote}) {
    const renderedNoteList = noteList.map(note => (
       <Note
        title={note.title}
        content={note.content}
        key={note.uuid}
        uuid={note.uuid}
        onNoteAttributeChange={onNoteAttributeChange}
        onDeleteNote={onDeleteNote}/>
    ))
    return (
        <div className="container">
            { renderedNoteList }
        </div>
  );
}

export default NoteList;
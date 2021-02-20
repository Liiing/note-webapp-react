import Note from './Note'

function NoteList({noteList, onNoteAttributeChange}) {
    const renderedNoteList = noteList.map(note => (
       <Note
        title={note.title}
        content={note.content}
        key={note.uuid}
        uuid={note.uuid}
        onNoteAttributeChange={onNoteAttributeChange}/>
    ))
    return (
        <div className="container">
            { renderedNoteList }
        </div>
  );
}

export default NoteList;
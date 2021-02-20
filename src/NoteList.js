function NoteList(props) {
    const renderedNoteList = props.noteList.map(note => (
        <article class="message is-warning">
            <div class="message-header">
                <p>{ note.title }</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
               { note.content }
            </div>
        </article>
    ))

    return (
        <div className="container">
            { renderedNoteList }
        </div>
  );
}

export default NoteList;
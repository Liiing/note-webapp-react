import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Note({uuid}) {
  const note = useSelector(state => state.noteList.find(note => note.uuid === uuid));
  const [isTitleEditable, setisTitleEditable] = useState(false);
  const [isContentEditable, setisContentEditable] = useState(false);

  return (
    <article className="message is-warning">
    <div className="message-header">
        <p onClick={() => setisTitleEditable(true)}>
          { isTitleEditable ? (
            <input
              type="text"
              value={note.title}
              ref={input => input && input.focus()}
              onChange={e => {}}
              onBlur={() => setisTitleEditable(false)}/>
          ) : (
            note.title
          )}
        </p>
        <button className="delete" aria-label="delete" onClick={e => {}}></button>
    </div>
    <div onClick={() => setisContentEditable(true)} className="message-body">
      { isContentEditable ? (
        <textarea
          value={note.content}
          ref={input => input && input.focus()}
          onChange={e => {}}
          onBlur={() => setisContentEditable(false)}/>
        ) : (
            note.content
        )}
    </div>
</article>
  );
}

export default Note;
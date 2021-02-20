import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Note({uuid}) {
  const note = useSelector(state => state.noteList.find(note => note.uuid === uuid));
  const [isTitleEditable, setisTitleEditable] = useState(false);
  const [isContentEditable, setisContentEditable] = useState(false);
  const dispatch = useDispatch();

  return (
    <article className="message is-warning">
    <div className="message-header">
        <p onClick={() => setisTitleEditable(true)}>
          { isTitleEditable ? (
            <input
              type="text"
              value={note.title}
              ref={input => input && input.focus()}
              onChange={e => dispatch({type: 'CHANGE_NOTE_ATTRIBUTE', uuid: note.uuid, attribute: 'title', value: e.target.value})}
              onBlur={() => setisTitleEditable(false)}/>
          ) : (
            note.title
          )}
        </p>
        <button className="delete" aria-label="delete" onClick={() => dispatch({type: 'DELETE_NOTE', uuid: note.uuid})}></button>
    </div>
    <div onClick={() => setisContentEditable(true)} className="message-body">
      { isContentEditable ? (
        <textarea
          value={note.content}
          ref={input => input && input.focus()}
          onChange={e => dispatch({type: 'CHANGE_NOTE_ATTRIBUTE', uuid: note.uuid, attribute: 'content', value: e.target.value})}
          onBlur={() => setisContentEditable(false)}/>
        ) : (
            note.content
        )}
    </div>
</article>
  );
}

export default Note;
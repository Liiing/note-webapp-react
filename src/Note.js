import React, { useState } from 'react';

function Note({uuid, title, content, onNoteAttributeChange, onDeleteNote}) {
  const [isTitleEditable, setisTitleEditable] = useState(false);
  const [isContentEditable, setisContentEditable] = useState(false);

  return (
    <article className="message is-warning">
    <div className="message-header">
        <p onClick={() => setisTitleEditable(true)}>
          { isTitleEditable ? (
            <input
              type="text"
              value={title}
              ref={input => input && input.focus()}
              onChange={e => onNoteAttributeChange('title', uuid, e)}
              onBlur={() => setisTitleEditable(false)}/>
          ) : (
            title
          )}
        </p>
        <button className="delete" aria-label="delete" onClick={e => onDeleteNote(uuid)}></button>
    </div>
    <div onClick={() => setisContentEditable(true)} className="message-body">
      { isContentEditable ? (
        <textarea
          value={content}
          ref={input => input && input.focus()}
          onChange={e => onNoteAttributeChange('content', uuid, e)}
          onBlur={() => setisContentEditable(false)}/>
        ) : (
            content
        )}
    </div>
</article>
  );
}

export default Note;
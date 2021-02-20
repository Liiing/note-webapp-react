import React, { useState } from 'react';

function Note(props) {
  const [isTitleEditable, setisTitleEditable] = useState(false);
  const [isContentEditable, setisContentEditable] = useState(false);

  return (
    <article className="message is-warning">
    <div className="message-header">
        <p onClick={() => setisTitleEditable(true)}>
          { isTitleEditable ? (
            <input
              type="text"
              value={props.title}
              ref={input => input && input.focus()}
              onBlur={() => setisTitleEditable(false)}/>
          ) : (
            props.title
          )}
        </p>
        <button className="delete" aria-label="delete"></button>
    </div>
    <div onClick={() => setisContentEditable(true)} className="message-body">
      { isContentEditable ? (
        <textarea
          value={props.content}
          ref={input => input && input.focus()}
          onBlur={() => setisContentEditable(false)}/>
        ) : (
            props.content
        )}
    </div>
</article>
  );
}

export default Note;
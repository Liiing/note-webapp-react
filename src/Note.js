import React, { useState } from 'react';

function Note(props) {
  const [isTitleEditable, setisTitleEditable] = useState(false);
  const [isContentEditable, setisContentEditable] = useState(false);

  return (
    <article class="message is-warning">
    <div class="message-header">
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
        <button class="delete" aria-label="delete"></button>
    </div>
    <div onClick={() => setisContentEditable(true)} class="message-body">
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
function Note(props) {
  return (
    <article class="message is-warning">
    <div class="message-header">
        <p>{ props.title }</p>
        <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
       { props.content }
    </div>
</article>
  );
}

export default Note;
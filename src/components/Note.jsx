

function Note({ note, onDelete }) {
  return (
    <div style={{backgroundColor: note.color}}>

    <button onClick={() => onDelete(note.id)}>X</button>
      {note.text}
    </div>
  );
}

export default Note;
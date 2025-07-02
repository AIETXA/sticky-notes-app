

import { useNotes } from "../hooks/useNotes";
import { ColorContext } from "../context/ColorContext";
import { useState, useContext } from "react";
import Note from "./Note";

const NoteBoard = () => {
    const { color } = useContext(ColorContext);
    const { notes, addNote, deleteNote } = useNotes();
    const [ text, setText ] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    addNote(text, color);
    setText("");
  };

  return (
    <div> 

    <div>
        <input 
            type="text" 
            placeholder="Escribe aquí tu nota" 
            value={text} 
            onChange={(e)=>setText(e.target.value)}>
        </input>
        <button onClick={handleSubmit}>Añadir Nota</button>
    </div>   

    <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
    </div>
    
  </div>
  )
}

export default NoteBoard
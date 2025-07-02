/* Guarda el array de notas: cada nota es un objeto con `id`, `text`, y `color`
- Funciones:

  - `addNote(text, color)` → añade una nueva nota
  - `deleteNote(id)` → elimina una nota por id

Para generar IDs únicos en cada nota, podéis hacer una función propia utilizando `Math.random()` con números y letras o podéis usar la librería `uuid`.
*/


import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

export const useNotes = () => {
    const [ notes, setNotes ] = useState([])

    function addNote(text, color) {

        const newNote = {
            id: uuidv4(),
            text,
            color,
        }
        setNotes([...notes, newNote])
    }

    function deleteNote(id) {
        setNotes((prev) => prev.filter((note) => note.id !==id));
    }
   
    return { notes, addNote, deleteNote };
}


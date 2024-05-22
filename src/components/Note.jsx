import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {

  function deleteNote(){
      props.onDelete(props.id)
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick= {deleteNote}><MdDelete /></button>
    </div>
  );
}

export default Note;

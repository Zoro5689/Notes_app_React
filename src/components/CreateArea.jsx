import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() && note.content.trim()) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    } else {
      console.log("Cannot add an empty note");
    }
  }

  function expand() {
    setIsClicked(true);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          onClick={expand}
        />

        {isClicked ? (
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={note.content}
            onChange={handleChange}
            onClick={expand}
          />
        ) : null}

        {isClicked ? (
          <button onClick={submitNote}>
            <IoIosAdd />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;

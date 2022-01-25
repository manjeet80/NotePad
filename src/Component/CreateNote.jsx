import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(false);
  };

  return (
    <div className="main-note" onDoubleClick={btoNormal}>
      <form>
        {expand ? (
          <input
            type="text"
            value={note.title}
            onChange={InputEvent}
            name="title"
            id="title"
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}
        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          id="textarea"
          cols=""
          rows=""
          placeholder="Write a note..."
          onClick={expandIt}
        ></textarea>
        {expand ? (
          <Button onClick={addEvent} class="btn-plus">
            <AddIcon className="plus-sign"></AddIcon>
          </Button>
        ) : null}
      </form>
    </div>
  );
};
export default CreateNote;

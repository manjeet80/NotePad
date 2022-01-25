import React from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";

const Header = () => {
  return (
    <div class="header">
      <div className="note-icon">
        <EventNoteIcon />
      </div>
      <h1>NotePad</h1>
    </div>
  );
};
export default Header;

import React, { useState } from "react";
import Header from "./Component/Header";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";
import Footer from "./Component/Footer";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx != id;
      })
    );
  };

  return (
    <div className="main-div">
      <Header />
      <CreateNote passNote={addNote} />
      <div className="container">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default App;

// ParentComponent.js
import React, { useState } from "react";

import TextareaTitle from "./TextAreaTitle ";
import TextareaNote from "./TextareaNote";
import Deletebutton from "./Deletebutton";


function ParentComponent() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e) => {
    setContentValue(e.target.value);
  };

  const handleSubmit = () => {
    setNotes([...notes, { title: titleValue, content: contentValue }]);
    setTitleValue("");
    setContentValue("");
  };
  
  const removeParagraph = (index) => {
    const updatedParagraphs = notes.filter((_, idx) => idx !== index);
    
    setNotes(updatedParagraphs);
    
    
  }
  const handleEditDoubleClick = (index, field) => {
    const updatedNotes = [...notes];
    const elementToEdit = field === "title" ? "title" : "content";
    const elementValue = updatedNotes[index][elementToEdit];

    const newContent = prompt(`Edit ${elementToEdit}:`, elementValue);
    if (newContent !== null) {
      updatedNotes[index][elementToEdit] = newContent;
      setNotes(updatedNotes);
    }
  };



  return (
    <div>
      <TextareaTitle
        value={titleValue}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <button
        onClick={handleSubmit}
        className=" mt-1 ml-3 flex h-fit w-fit items-center justify-start"
      >
        {" "}
        <svg
          className="ml-3 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
        </svg>
        <span className="ml-3 font-mono whitespace-nowrap  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          New Note
        </span>
      </button>
      
        <TextareaNote
          value={contentValue}
          onChange={handleContentChange}
          placeholder="Note"
        />
      

      <div>
        <ul className="grid grid-cols-3 gap-4 mt-4">
          {notes.map((note, index) => (
            <li
              key={index}
              className="ml-4 mr-4  p-3 rounded border-solid border-2 border-gray-600"
            >
              {/* Double-click to edit the title */}
              <h3
                className=" rounded border-solid border-2  border-gray-600"
                onDoubleClick={() => handleEditDoubleClick(index, "title")}
                style={{ cursor: "pointer" }}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onBlur={(e) => {
                  const updatedNotes = [...notes];
                  updatedNotes[index].title = e.target.innerText;
                  setNotes(updatedNotes);
                }}
              >
                {note.title}
              </h3>
              {/* Double-click to edit the content */}
              <p
                className="mt-3 rounded border-solid border-2 border-gray-600"
                onDoubleClick={() => handleEditDoubleClick(index, "content")}
                style={{ cursor: "pointer" }}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onBlur={(e) => {
                  const updatedNotes = [...notes];
                  updatedNotes[index].content = e.target.innerText;
                  setNotes(updatedNotes);
                }}
              >
                {note.content}
              </p>
              <div className="flex justify-center items-center">
                <Deletebutton onClick={() => removeParagraph(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ParentComponent;









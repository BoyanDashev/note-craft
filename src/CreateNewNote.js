import { useState } from "react";

function CreateNewNode() {
  const [valuefromtext, setValueFromText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [valuefromanothertext, setValueFromAnotherText] = useState("");
  const [textitem, setTextItem] = useState([]);

  const addTextToParagraphs = () => {
    setParagraphs([...paragraphs, valuefromtext]);
    setTextItem([...textitem, valuefromanothertext]);
    setValueFromText("");
    setValueFromAnotherText("");
  };

  const removeParagraph = (index) => {
    const updatedParagraphs = paragraphs.filter(( idx) => idx !== index);
    const updatedTextItem = textitem.filter(( idx) => idx !== index);
    setParagraphs(updatedParagraphs);
    setTextItem(updatedTextItem);
  };

  return (
    <div>
      <div className="fixed top-20 left-1/2 transform -translate-x-1/3 w-full">
        <div className="grid gap-2 mx-auto w-1/2">
          <textarea
            value={valuefromtext}
            onChange={(e) => setValueFromText(e.target.value)}
            placeholder="Title"
            className="h-10 w-1/2 border-solid border-2 border-gray-600"
          ></textarea>
          <textarea
            value={valuefromanothertext}
            onChange={(e) => setValueFromAnotherText(e.target.value)}
            placeholder="Take a note..."
            className="h-20 w-1/2 border-solid border-2 border-gray-600"
          ></textarea>
        </div>
        <div>
          <ul className="grid gap-2 mx-auto w-2/3">
            {paragraphs.map((text, index) => (
              <div key={index}>
                <p>{text}</p>
                <button onClick={() => removeParagraph(index)}>Delete</button>
              </div>
            ))}
            {textitem.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="h-fit w-fit">
          <div
            className="mt-3 flex h-fit w-fit items-center justify-start"
            onClick={addTextToParagraphs}
          >
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
          </div>
          <div className="mt-4 flex h-fit w-fit items-center justify-start">
            <svg
              className="ml-3 w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
            </svg>

            <span className="ml-3  font-mono whitespace-nowrap  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              {" "}
              Edit Note{" "}
            </span>
          </div>
          <div className="mt-4 flex h-fit w-fit items-center justify-start">
            <svg
              className="ml-3 w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
            </svg>
            <span className="ml-3  font-mono whitespace-nowrap  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              {" "}
              Delete Note{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewNode;

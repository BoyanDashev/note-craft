import { useEffect, useRef, useState } from "react";

function CreateNewNode() {
  const textAreaRef = useRef(null);
  const anotherTextAreaRef = useRef(null);
  const [valuefromtext, setValueFromText] = useState("");
  const [valuefromanothertext, setValueFromAnotherText] = useState("");

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [valuefromtext]);

  useEffect(() => {
    anotherTextAreaRef.current.style.height = "auto";
    anotherTextAreaRef.current.style.height = `${anotherTextAreaRef.current.scrollHeight}px`;
  }, [valuefromanothertext]);

  const [paragraphs, setParagraphs] = useState([]);

  const [textitem, setTextItem] = useState([]);

  const addTextToParagraphs = () => {
    setParagraphs([...paragraphs, valuefromtext]);
    setTextItem([...textitem, valuefromanothertext]);
    setValueFromText("");
    setValueFromAnotherText("");
  };

  const removeParagraph = (index) => {
    const updatedParagraphs = paragraphs.filter((_, idx) => idx !== index);
    const updatedTextItem = textitem.filter((_, idx) => idx !== index);
    setParagraphs(updatedParagraphs);
    setTextItem(updatedTextItem);
  };

  return (
    <div className="overflow-y-auto  h-screen">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/3 w-full">
        <div className="grid gap-2 mx-auto w-1/2">
          <textarea
            value={valuefromtext}
            onChange={(e) => {
              setValueFromText(e.target.value);
              textAreaRef.current.style.height = "auto";
              textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
            }}
            rows="2"
            ref={textAreaRef}
            placeholder="Title"
            className="text-xl rounded-md h-10 w-1/2 border-solid border-2 border-gray-600"
          ></textarea>
          <textarea
            value={valuefromanothertext}
            onChange={(e) => {
              setValueFromAnotherText(e.target.value);
              anotherTextAreaRef.current.style.height = "auto";
              anotherTextAreaRef.current.style.height = `${anotherTextAreaRef.current.scrollHeight}px`;
            }}
            rows="2"
            ref={anotherTextAreaRef}
            placeholder="Take a note..."
            className="rounded-md h-20 w-1/2 border-solid border-2 border-gray-600"
          ></textarea>
        </div>
        <div>
          <div className="mt-10 mx-auto max-w-1/3 flex flex-col gap-4">
            {paragraphs.map((text, index) => (
              <div
                key={index}
                className="rounded border-solid border-2 border-gray-600 w-1/6"
                style={{ minWidth: "16.666%" }}
              >
                <div className="p-4">
                  <div className="text-xl max-w-15pc break-words">{text}</div>
                </div>
              </div>
            ))}
            {textitem.map((text, index) => (
              <div
                key={index}
                className="rounded border-solid border-2 border-gray-600 w-1/6"
                style={{ minWidth: "16.666%" }}
              >
                <div className="text-xl max-w-15pc break-words">{text}</div>
                <div
                  className="w-5 h-5 mt-3"
                  onClick={() => removeParagraph(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
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

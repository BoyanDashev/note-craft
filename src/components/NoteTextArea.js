import { useRef,useEffect } from "react";


function NoteTextArea({ textAreaValues, setTextAreaValues, handleChange, }) {
  const textAreaRef1 = useRef(null);
  const textAreaRef2 = useRef(null);

  useEffect(() => {
    adjustTextAreaHeight(textAreaRef1);
    adjustTextAreaHeight(textAreaRef2);
  }, [textAreaValues]);

  const adjustTextAreaHeight = (ref) => {
    if (ref && ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  return (
    <div>
      <form>
        <div className="overflow-y-auto  h-screen">
          <div className="absolute top-20 left-1/2 transform -translate-x-1/3 w-full">
            <div className="grid gap-2 mx-auto w-1/2">
              <textarea
                value={textAreaValues[0]}
                onChange={(e) => {
                  handleChange(e, 0);
                }}
                rows="2"
                ref={textAreaRef1}
                placeholder="Title"
                className="text-xl rounded-md h-10 w-1/2 border-solid border-2 border-gray-600"
              ></textarea>
              <textarea
                value={textAreaValues[1]}
                onChange={(e) => {
                  handleChange(e, 1);
                }}
                rows="2"
                ref={textAreaRef2}
                placeholder="Note"
                className="text-xl rounded-md h-10 w-1/2 border-solid border-2 border-gray-600"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NoteTextArea;




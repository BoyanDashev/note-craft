import { useEffect, useRef } from "react";

function TextareaTitle({ value, onChange }) {
  const textAreaRef1 = useRef(null);

  useEffect(() => {
    adjustTextAreaHeight(textAreaRef1);
  }, [value]);

  const adjustTextAreaHeight = (ref) => {
    if (ref && ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  return (
    <div>
      <div className="grid gap-2 mx-auto w-1/2">
        <textarea
          value={value}
          onChange={onChange}
          rows="2"
          ref={textAreaRef1}
          placeholder="Title..."
          name="Title"
          className="text-xl rounded-md h-10 w-1/2 border-solid border-2 border-gray-600"
        ></textarea>
      </div>
    </div>
  );
}
export default TextareaTitle;

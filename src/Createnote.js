import { useEffect, useRef, useState } from 'react';

function Createnote(){

    const textAreaRef = useRef(null);
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  }
  
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [val])

    return(
       <div className='flex justify-center items-center pt-6 pl-14 '>
        <textarea className='p-1 w-[30rem] active:outline-none focus:outline-none rounded border-2
         border-slate-500' placeholder='Take a note...'
          value={val} onChange={handleChange} rows="2" ref={textAreaRef}/>
        </div>
    );
} export default Createnote;
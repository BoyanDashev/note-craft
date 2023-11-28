
function Noteoutput({ textAreaValues }) {
  return (
    <div>
      <ul>
        {textAreaValues.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Noteoutput;

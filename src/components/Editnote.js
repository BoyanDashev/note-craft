

function Editnote({ field, value, onDoubleClick }) {
  return (
    <p onDoubleClick={onDoubleClick} style={{ cursor: "pointer" }}>
      {value}
    </p>
  );
}

export default Editnote;

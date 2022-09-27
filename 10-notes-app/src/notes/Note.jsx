function Note({item}){
  return (
    <div className="note">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
}

export default Note;
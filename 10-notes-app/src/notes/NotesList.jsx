import { useContext } from 'react';
import { ListContext } from "../contexts/ListContext";
import Note from "./Note";

function NotesList(){
  const { list } = useContext(ListContext);

  return (
    <div>
      {list.map((item) => (
        <Note key={item.id} item={item} />
      ))}
    </div>
  );
}

export default NotesList;
import { useState, useEffect } from 'react';

const LOCALSTORAGE_KEY = "MIAPP.list";

function useList(){
  const [list, setList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_KEY)){
      setList(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    }
  }, []);
  
  useEffect(function(){
    // Save list in localStorage
    if(list && list.length > 0){
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(list));
    }
  }, [list]);

  function add(listObject){
    // Generate custom id from current timestamp
    const id = Date.now();
    const newListObject = { ...listObject, id };
    setList([newListObject,...list]);
  }

  function remove(listObject){
    setList(list.filter(item => item !== listObject));
  }

  function clear(){
    setList([]);
  }

  return {
    list,
    add,
    remove,
    clear
  };
}

export default useList;
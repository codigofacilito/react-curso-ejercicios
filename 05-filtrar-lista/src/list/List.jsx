import { useState } from "react";
import ListView from "./ListView";

import originalItems from "./items";

function List(){
  let [items, setItems] = useState(originalItems);

  function filterItemsBySearchPattern(searchPattern){
    let filteredItems = originalItems.map(item => item.toLocaleLowerCase().includes(searchPattern) ? item : null);
    setItems(filteredItems);
  }

  function filterItems(searchPattern){
    if(searchPattern === ""){
      setItems(originalItems);
    } else {
      filterItemsBySearchPattern(searchPattern);
    }
  }




  return <ListView items={items} filterItems={filterItems} />
}

export default List;
import { createContext, useState, useEffect, useContext } from 'react';
import originalItems from '../list/items';
import { SearchContext } from './SearchContext';

export const ItemsContext = createContext("");

function filterItemsBySearchPattern(items, searchPattern) {
  return items.map(item => item.toLocaleLowerCase().includes(searchPattern) ? item : null);
}

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(originalItems);
  const {search} = useContext(SearchContext);

  useEffect(() => {
    if (search === "") {
      setItems(originalItems);
    } else {
      let filteredItems = filterItemsBySearchPattern(originalItems, search);
      setItems(filteredItems);
    }
  }, [search]);  

  

  return (
    <ItemsContext.Provider value={ {items} }>
      {children}
    </ItemsContext.Provider>
  );
}

import { useContext } from 'react';
import {SearchContext} from '../contexts/SearchContext';
function SearchInput(){
  const { search, setSearch } = useContext(SearchContext);
  return (
    <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}

export default SearchInput;
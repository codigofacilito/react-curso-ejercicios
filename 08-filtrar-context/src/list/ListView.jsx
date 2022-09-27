import SearchInput from '../form/SearchInput';
import ListItem from './ListItem';

function ListView({ items, filterItems }){
  if (!items) return <p>Cargando...</p>
  return (
    <div>
      <SearchInput />
      <ul>
        {items.map((item, index) => (item && <ListItem key={index} item={item} />) )}
      </ul>
    </div>
  )
}

export default ListView;
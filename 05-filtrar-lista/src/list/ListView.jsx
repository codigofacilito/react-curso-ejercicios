import ListItem from './ListItem';

function ListView({ items, filterItems }){
  
  return (
    <div>
      <input type="text" onChange={e => filterItems(e.target.value)} />
      <ul>
        {items.map((item, index) => (item && <ListItem key={index} item={item} />) )}
      </ul>
    </div>
  )
}

export default ListView;
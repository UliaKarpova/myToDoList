import './List.css';
import Element from '../Element/Element';

function List({ items, deleteItem, getItem, onEdit }) {

  const listElements = items.map((item) => {
    console.log(item.itemId);
    return (
          <Element key={item.itemId}
          item={item}
          deleteItem={deleteItem}
          onEdit={onEdit}
          getItem={getItem}
          />
  )
  })

  return (
      <ul className='list'>
        {listElements}
      </ul>
  );
}

export default List;

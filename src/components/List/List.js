import './List.css';
import Element from '../Element/Element';

function List({ items, onClickCheck, onClickCDel, onSubmit }) {

  const listElements = items.map((item, index) => {
    console.log(index);
    return (
      <li key={index} 
      className='list__item'>
          <Element 
          item={item}
          onClickCheck={onClickCheck}
          onClickDel={onClickCDel}
          onSubmit={onSubmit}
          />
      </li>
  )
  })

  return (
      <ul className='list'>
        {listElements}
      </ul>
  );
}

export default List;

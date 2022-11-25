import daysjs from 'dayjs';
import { useEffect } from 'react';

import './Element.css';

import check from '../../images/check.png';
import del from '../../images/del.png';

function Element({ item, onClickCheck, deleteItem, getItem, onEdit }) {

  const todayDate = daysjs();
  const itemDate = daysjs(item.date);

  const bool = todayDate.isAfter(itemDate);





  console.log(itemDate);
  console.log(todayDate);

  const data = item.date?.split('-').reverse().join('.');

  function toggleDone(event) {
    const element = event.currentTarget;
    const item = element.closest('.item');
    item.classList.toggle('done');
  }

  function handleClickDel() {
    deleteItem(item);
  }

  function handleEdit() {
    getItem(item);
    onEdit();
  }

  return (
    <li className={bool ? 'item expired' : 'item'} >
      <button className='item__to-view'
      onClick={handleEdit}>
        <h3 className='item__title'>{item.title}</h3>
        <p className='item__date'>{data}</p>
      </button>
      <img className='item__image' 
      onClick={toggleDone}
      src={check} alt='Задача выполнена' />
      <img className='item__image'
      onClick={handleClickDel}
      src={del} alt='Удалить задачу' />
    </li>
  );
}

export default Element;

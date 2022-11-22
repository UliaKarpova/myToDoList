import { useState } from'react';

import './Element.css';

import Form from '../Form/Form';

import check from '../../images/check.png';
import del from '../../images/del.png';

function Element({ item, onClickCheck, onClickDel, onSubmit }) {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const data = item.date?.split('-').reverse().join('.');


  function closeForm() {
    setIsFormOpen(false);  
  }

  function handleClick() {
    console.log('I am here');
    setIsFormOpen(true);
  }

  function handleClickCheck() {
    onClickCheck(item); 
  }

  function handleClickDel() {
    onClickDel(item);
  }

  return (
    <>
      <button className='item__to-view'
      onClick={handleClick}>
        <h3 className='item__title'>{item.title}</h3>
        <p className='item__date'>{data}</p>
      </button>
      <img className='item__image' 
      onClick={handleClickCheck}
      src={check} alt='Задача выполнена' />
      <img className='item__image'
      onClick={handleClickDel}
      src={del} alt='Удалить задачу' />

    {isFormOpen ? (
    <Form onSubmit={onSubmit} item={item} closeForm={closeForm} />
    ) : ''
}
    </>
  );
}

export default Element;

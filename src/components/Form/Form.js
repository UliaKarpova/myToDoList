import React, { useState } from 'react';

import './Form.css';
import clip from '../../images/clip.png';

function Form({ onSubmit, item, closeForm }) {

  const [values, setValues] = useState({});
  console.log(values);

  function handleChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      setValues({...values, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(values);
    if (closeForm) {
      closeForm();
    }
  }

  return (
    <div className='form__container'>
      <form className='form'
      onSubmit={handleSubmit}>
        <h2 className='form__title'>{!item ? 'Добавить задачу' : 'Редактировать'}</h2>
        <label htmlFor='title' 
        className='form__label'>Заголовок</label>
        <input onChange={handleChange} 
        defaultValue={item?.title || ''}
        required
        name='title' 
        id='title' 
        type='text' 
        className='form__input' />

        <label htmlFor='text' 
        className='form__label'>Описание задачи</label>
        <textarea onChange={handleChange}
        defaultValue={item?.text || ''}
        wrap='hard'
        name='text' 
        id='text' 
        className='form__input text' />

        <label htmlFor='date' className='form__label'>Выполнить до</label>
        <input onChange={handleChange}
        defaultValue={item?.date || ''}
        name='date' 
        id='date' 
        type='date' 
        className='form__input' />

        <label htmlFor='file' className='form__label label-file'>
          <input onChange={handleChange}
          defaultValue={item?.file || ''}
          name='file' 
          id='file' 
          type='file' 
          className='file' />
          <span className='form__label-text'>Прикрепить файл</span>
          <img src={clip} alt='Скрепка' className='form__label-image'/>
        </label>

        <button type='submit' className='form__submit'>&#10004; &emsp; {!item ? 'Добавить' : 'Изменить'}</button>
      </form>
    </div>
  );
}

export default Form;

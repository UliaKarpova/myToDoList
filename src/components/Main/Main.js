import { useState } from 'react';

import './Main.css';

import Form from '../Form/Form';
import List from '../List/List';

function Main({ onSubmit, items, deleteItem, isFormOpen, toggleOpenForm, updateItem, onEdit, isEditFormOpen, toggleOpenEditForm }) {
    /** Сщхдаём переменную состояния для текущей задачи */
    const [item, setItem] = useState({});

    /** Получаем данные текущей задачи и сохраняем в стейт */
    function getItem(data) {
        setItem(data);
    }

    return (
        <section className='main'>
            <button className='main__add-item'
            type='button'
            onClick={toggleOpenForm}>&#10010; &emsp; Добавить задачу</button>

            <List items={items}
            getItem={getItem}
            deleteItem={deleteItem}
            onEdit={onEdit}
            isEditFormOpen={isEditFormOpen} />

            {!isFormOpen ? '' : (
                <Form onSubmit={onSubmit} 
                closeForm={toggleOpenForm} />
            )}

            {!isEditFormOpen ? '' : (
                <Form onSubmit={onSubmit} 
                item={item} 
                updateItem={updateItem} 
                closeForm={toggleOpenEditForm} />
            )}
        </section>
    );
}

export default Main;

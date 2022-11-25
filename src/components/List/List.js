import './List.css';

import Element from '../Element/Element';

function List({ items, deleteItem, getItem, onEdit }) {
    /** Проходим методом map по массиву с задачами и для каждого объекта создаём компонент Element,
    всё это сохраняем в переменную, которая затем отрисовывается внутри списка */
    const listElements = items.map((item) => {
        return (
            <Element key={item.itemId}
            item={item}
            deleteItem={deleteItem}
            onEdit={onEdit}
            getItem={getItem}
            />
        )
    });

    return (
        <ul className='list'>
            {listElements}
        </ul>
    );
}

export default List;

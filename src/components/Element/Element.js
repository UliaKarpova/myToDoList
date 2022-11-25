import daysjs from 'dayjs';

import './Element.css';

import check from '../../images/check.png';
import del from '../../images/del.png';

function Element({ item, deleteItem, getItem, onEdit }) {
    /** Получаем сегодняшнюю дату и дату из объекта задачи, сохраняем данные в переменные */
    const todayDate = daysjs();
    const itemDate = daysjs(item.date);

    /** Узнаём, истёк ли срок выполнения задачи */
    const bool = todayDate.isAfter(itemDate);

    /** Преобразуем дату из объекта задачи в тот вид, в котором она будет отрисована пользователю */
    const data = item.date?.split('-').reverse().join('.');

    /** Получаем данные, на какой из задач была нажата кнопка выполнения, 
    добавляем класс этой строке, чтобы визуально отобразить пользователю */
    function toggleDone(event) {
        const element = event.currentTarget;
        const item = element.closest('.item');
        item.classList.toggle('done');
    }

    /** Вызываем функцию удаления задачи, передаём ей объект с данными */
    function handleClickDel() {
        deleteItem(item);
    }

    /** Передаём объект с данными о текущей задаче в Main, откуда будет открыта форма просмотра/редактирования */
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

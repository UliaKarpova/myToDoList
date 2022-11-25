import { useState, useEffect } from 'react';

import { set, ref, child, get, remove, update } from 'firebase/database';
import { db } from '../../firebase';

import { uid } from 'uid';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

	/** Создаём переменные состояния для массива задач и состояния формы добавления/редактирования задачи*/
	const [items, setItems] = useState([]);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isEditFormOpen, setIsEditFormOpen] = useState(false);

	/** Получаем из базы все имеющиеся задачи при первой загрузке */
	useEffect(() => {
		getItems();
	}, [])

	/** Функция отправляет запрос в базу для получения всех задач и сохраняет их в стейт-переменную */
	function getItems() {
		const dbRef = ref(db);

		get(child(dbRef, '/')).then((snapshot) => {
			if (snapshot.exists()) {
				const itemsArray = Object.values(snapshot.val());
				setItems(itemsArray);
			} else {
				console.log('No data available');
			}
		}).catch((error) => {
			console.error(error);
		});
	}

	/** Функция записывает новую задачу в базу и добавляет её в стейт-переменную */
	function writeItem(item) {
		const itemId = uid(); 
		const newItem = {
			title: item.title,
			date: item.date || '',
			text: item.text || '',
			file: item.file || '',
			itemId
			};
		set(ref(db, `/${itemId}`), newItem)
		setItems([newItem, ...items])
		toggleOpenForm();
	}


	/** Открытие/закрытие формы добавления задачи */
	function toggleOpenForm() {
		setIsFormOpen(!isFormOpen);
	}

	/** Открытие/закрытие формы редактирования задачи */
	function toggleOpenEditForm() {
		setIsEditFormOpen(!isEditFormOpen);
	}


	/** Функция удаляет задачу из дазы данных и записывает изменения в стейт */
	function deleteItem(item) {
		remove(ref(db, `/${item.itemId}`));
		getItems();
	}

	/** Изменяем данные в базе и обновляем стейт */
	function updateItem(item, values) {
		const newItem = {
			title: values.title || item.title || '',
			date: values.date || item.date || '',
			text: values.text || item.text || '',
			file: values.file || item.file || '',
			itemId: item.itemId
			};
		update(ref(db, `/${item.itemId}`), newItem)
		getItems();
		toggleOpenEditForm();
	}

	return (
		<div className='App'>
			<Header />

			<Main onSubmit={writeItem}
			items={items}
			deleteItem={deleteItem}
			onEdit={toggleOpenEditForm}
			toggleOpenForm={toggleOpenForm}
			toggleOpenEditForm={toggleOpenEditForm}
			isFormOpen={isFormOpen}
			updateItem={updateItem}
			isEditFormOpen={isEditFormOpen} />

			<Footer />
		</div>
	);
};

export default App;

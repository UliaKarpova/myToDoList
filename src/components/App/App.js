import { useState, useEffect } from 'react';
import { set, ref, child, get, remove, update } from 'firebase/database';

import { db } from '../../firebase';
import { uid } from 'uid';


import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [items, setItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);


  useEffect(() => {
    getItems();
  }, [])

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

  function writeItem(item) {
    const itemId = uid();  
    const newItem = {
      title: item.title,
      date: item.date || '',
      text: item.text || '',
      file: item.file || '',
      itemId
    }
    set(ref(db, `/${itemId}`), newItem)
    setItems([newItem, ...items])
    toggleOpenForm();
  }

  function toggleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }

  function toggleOpenEditForm() {
    setIsEditFormOpen(!isEditFormOpen);
  }

  function deleteItem(item) {
    remove(ref(db, `/${item.itemId}`));
    getItems();
  }

  function updateItem(item, values) {
    const newItem = {
      title: values.title || item.title || '',
      date: values.date || item.date || '',
      text: values.text || item.text || '',
      file: values.file || item.file || '',
      itemId: item.itemId
    }

    update(ref(db, `/${item.itemId}`), newItem)

    getItems();
    toggleOpenEditForm();
  }

  function handleEdit() {
    setIsEditFormOpen(true);
  }

  function closeForm() {
    setIsEditFormOpen(false);
    setIsFormOpen(false);
  }

  return (
    <div className='App'>
      <Header />

      <Main onSubmit={writeItem}
      items={items}
      deleteItem={deleteItem}
      onEdit={handleEdit}
      toggleOpenForm={toggleOpenForm}
      isFormOpen={isFormOpen}
      updateItem={updateItem}
      isEditFormOpen={isEditFormOpen}
      closeForm={closeForm}
       />
      <Footer />
    </div>
  );
}

export default App;

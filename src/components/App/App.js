import { useState, useEffect } from 'react';
import { set, ref, push } from 'firebase/database';


import { db } from '../../firebase';
import { uid } from 'uid';


import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [items, setItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function writeItem(item) {
    console.log(item);
    const itemId = uid();
    console.log(itemId);

  
    set(ref(db, `/${itemId}`), ({
      title: item.title,
      date: item.date || '',
      text: item.text || '',
      file: item.file || '',
      itemId
    }))
    setItems([item, ...items])
    toggleOpenForm();
  }

  function toggleOpenForm() {
    setIsFormOpen(!isFormOpen);
  }

  function addItem(values) {
    setIsFormOpen(false);
  }

  function deleteItem(values) {

  }

  function checkItem(values) {

  }

  function viewItem() {
    /*setIsFormOpen(true);*/
  }

  return (
    <div className='App'>
      <Header />
      <Main onSubmit={writeItem}
      items={items}
      onClickCheck={checkItem}
      onClickDel={deleteItem}
      onClick={viewItem}
      toggleOpenForm={toggleOpenForm}
      isFormOpen={isFormOpen}
       />
      <Footer />
    </div>
  );
}

export default App;

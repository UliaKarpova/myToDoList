import './Main.css';
import Form from '../Form/Form';
import List from '../List/List';

function Main({ onSubmit, items, onClickCheck, onClickDel, onClick, isFormOpen, toggleOpenForm }) {
  return (
    <section className='main'>
      <button className='main__add-item'
      type='button'
      onClick={toggleOpenForm}>&#10010; &emsp; Добавить задачу</button>

      <List items={items}
      onClickCheck={onClickCheck}
      onClickDel={onClickDel}
      onSubmit={onSubmit}
      />

      {!isFormOpen ? '' : (
      <Form onSubmit={onSubmit} />
      )}
    </section>
  );
}

export default Main;

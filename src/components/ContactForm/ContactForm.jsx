import { useState } from 'react';
import shortid from 'shortid';
import css from './ContactForm.module.css';

function ContactForm({ addContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formNameChange = event => {
    setName(event.currentTarget.value);
  };

  const formNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const formSumbit = event => {
    event.preventDefault();
    addContacts({
      id: shortid.generate(),
      name: name,
      number: number,
    });
    event.currentTarget.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={formSumbit}>
        <p className={css.title}>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formNameChange}
        ></input>
        <p className={css.title}>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={formNumberChange}
        ></input>
        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

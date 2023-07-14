import React from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsReducer';
import { setFilter } from 'redux/filtersReducer';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const contacts = useSelector(state => state.contacts.contacts);
  // const filter = useSelector(state => state.filters.filter);

  const handleFormSubmit = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={clsx('wrapper')}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} filterChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  handleDeleteContact: PropTypes.func,
  handleFilterChange: PropTypes.func,
};

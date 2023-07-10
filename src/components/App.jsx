import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const getDefaultContacts = () => [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [filter, setFilter] = useState('');

  ///////////////// v1 start ///////////////////////

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : getDefaultContacts();
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  ///////////////// v1 end ///////////////////////
  ///////////////// v2 start ///////////////////////

  // const [isMounted, setIsMounted] = useState(false);
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   setIsMounted(true);
  //   const savedContacts = localStorage.getItem('contacts');

  //   if (!savedContacts) return;

  //   const parsedContacts = JSON.parse(savedContacts);
  //   setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   if (!isMounted) return;

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts, isMounted]);

  ///////////////// v2 end ///////////////////////

  const handleFormSubmit = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact with this name already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
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

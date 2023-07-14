import { createAction, createReducer } from '@reduxjs/toolkit';

const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');

const initialState = {
  contacts: savedContacts,
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
  },
  [deleteContact]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
  },
});

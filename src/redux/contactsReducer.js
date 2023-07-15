import { createAction, createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
const initialState = {
  contacts: savedContacts,
};

//////////// wersja z createReducer START ////////////

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');

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

//////////// wersja z createReducer END ////////////
//----------
//////////// wersja z createSlice START ///////////////

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//       localStorage.setItem('contacts', JSON.stringify(state.contacts));
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//       localStorage.setItem('contacts', JSON.stringify(state.contacts));
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

//////////// wersja z createSlice END ///////////////

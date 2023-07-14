// contactsSlice.js
import { createAction, createReducer } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/set');

const initialState = {
  filter: '',
};

export const filtersReducer = createReducer(initialState, {
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});

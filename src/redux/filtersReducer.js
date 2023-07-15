// contactsSlice.js
import { createAction, createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

//////////// wersja z createReducer START ////////////

export const setFilter = createAction('filter/set');

export const filtersReducer = createReducer(initialState, {
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});

//////////// wersja z createReducer END ////////////
//----------
//////////// wersja z createSlice START ///////////////

// const filtersSlice = createSlice({
//   name: 'filtqweers',
//   initialState,
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { setFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

//////////// wersja z createSlice END ///////////////

import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const plus = createAction('NUM_PLUS');
export const minus = createAction('NUM_MINUS');

export default createReducer(initialState, {
  [plus]: state => {
    state.counter++;
  },

  [minus]: state => {
    if (state.counter > 0) {
      state.counter--;
    }
  },
});

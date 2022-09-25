import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
  name: 'toolkitSlice',
  initialState: {
    counter: 0,
  },
  reducers: {
    plus(state) {
      state.counter++;
    },
    minus(state) {
      if (state.counter > 0) state.counter--;
    }
  },
});

export const { plus, minus } = toolkitSlice.actions;
export default toolkitSlice.reducer;

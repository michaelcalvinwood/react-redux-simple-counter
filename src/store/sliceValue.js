import { createSlice } from '@reduxjs/toolkit';

let id = 0;

const sliceValue = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => ++state,
        decrement: (state, action) => --state,
    }
});

export const { increment, decrement } = sliceValue.actions;

export default sliceValue.reducer;
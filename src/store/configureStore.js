import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './sliceValue';

const store = configureStore({ 
    reducer: {
       counter: counterReducer
    }
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './sliceValue';

const store = configureStore({ 
    reducer: {
       value: valueReducer
    }
});

export default store;
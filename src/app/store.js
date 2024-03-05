import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from '../features/buttonSlide.js';

export const store = configureStore({
    reducer: {
        button: buttonReducer,
    },
});

export default store;
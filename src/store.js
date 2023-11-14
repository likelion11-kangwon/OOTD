import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import logger from 'redux-logger';

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: false,
});
export default store;

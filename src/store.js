import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import logger from 'redux-logger';

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: true, //TODO 배포 시 false로 설정해두기
});
export default store;

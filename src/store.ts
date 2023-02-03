import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/slice/todoSlice';
import notificationSlice from './common/slice/notificationSlice';

const store = configureStore({
    reducer:{
        todo:todoSlice.reducer,
        notification:notificationSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
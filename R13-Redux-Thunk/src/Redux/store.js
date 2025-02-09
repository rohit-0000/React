import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from './Slice/Todo'
export const store =configureStore({
    reducer:{
        Todo: toDoReducer,
    },
})
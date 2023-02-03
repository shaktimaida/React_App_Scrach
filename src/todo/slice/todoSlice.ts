import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { TodoItem,TodoItemsState } from "../contract/TodoItem";
import _ from "lodash";

export const initialState:TodoItemsState = {
    TodoItems: []
}

     export const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, payloadAction: PayloadAction<TodoItem>) => {
                state.TodoItems = state.TodoItems.concat(payloadAction.payload);
                return state;
            },
            removeTodo: (state, payloadAction: PayloadAction<TodoItem>) => {
                state.TodoItems = state.TodoItems.filter(x => x.message != payloadAction.payload.message);
                return state;
            },
            completeTodo:(state, payloadAction:PayloadAction<TodoItem>) => {
                const item = _.find(state.TodoItems, x => x.message == payloadAction.payload.message);
                if(item){
                    item.isComplete = true;
                }
                
            }
        },
    });

    export default todoSlice;
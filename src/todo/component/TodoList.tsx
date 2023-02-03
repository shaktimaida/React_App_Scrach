import React from "react";
import { useAppSelector } from "../../appHooks";
import TodoListItem from "./TodoListItem";
import TodoForm from "./TotoForm";

const TodoList = () :JSX.Element => {
    const state = useAppSelector(state => state.todo);
    return <div className="list-wrapper">
        <TodoForm></TodoForm>
        {state.TodoItems?.map(todo => <TodoListItem message={todo.message} isComplete={todo.isComplete}></TodoListItem>)}
    </div>
};

export default TodoList;
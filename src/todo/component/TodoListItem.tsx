import React from "react";
import { TodoItem } from "../contract/TodoItem";
import todoSlice from "../slice/todoSlice";
import { useAppDispatch } from "../../appHooks";
import '../../css/todo.css'
import _ from "lodash";

const TodoListItem = (todo:TodoItem) :JSX.Element => {    
    const dispatch = useAppDispatch();
    return <div className="todo-item-container">
        <h1>
            {todo.message}
        </h1>
        <div className="button-container">
            {
                !todo.isComplete ? 
                <>
                <button onClick={() => dispatch(todoSlice.actions.completeTodo(todo))}
                 className="complete-button">Mark as complete</button>
                 <button onClick={() => dispatch(todoSlice.actions.removeTodo(todo))} className="remove-button">Remove</button>
                 </>
                 :
                <label className="complete-button">Completed</label>
            }

            
        </div>
    </div>
}

export default TodoListItem;
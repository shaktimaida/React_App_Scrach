import _ from "lodash";
import react, {useState} from "react";
import { useAppDispatch, useAppSelector } from "../../appHooks";
import { notificationTypes } from "../../common/contract/notification";
import notificationSlice from "../../common/slice/notificationSlice";
import { TodoItem } from "../contract/TodoItem";
import todoSlice from "../slice/todoSlice";


const TodoForm = ():JSX.Element => {
    const [inputValue, setInputValue] = useState({message:"", isComplete:false});
    const state = useAppSelector(x => x.todo);
    const dispatch = useAppDispatch();
    const onCreateTodoButtonClick = (inputValue:TodoItem) => {
        const {addTodo} = todoSlice.actions;
        const {addError, addWarning} = notificationSlice.actions;
        if(inputValue.message == null || inputValue.message == ""){
            dispatch(addWarning({message:"Message is blank.", type:notificationTypes.warning, id: _.uniqueId()}))
        }
        else{
            const item = _.find(state.TodoItems, x => x.message == inputValue.message);
            if(item != null){
                dispatch(addError({message:"Message already exist.", type:notificationTypes.error, id: _.uniqueId()}))
            }
            else{
                dispatch(addTodo(inputValue))
            }
        }
    
    }
    return <div className="TodoForm-wrapper">
        <input className="new-todo-input" type="text" value={inputValue.message}
            placeholder='Please text here'
            onChange={e => setInputValue({message:e.target.value, isComplete:false})}>
        </input>
        <button className="new-todo-button"
            onClick={() => onCreateTodoButtonClick(inputValue)}
        >Create Todo</button>
    </div>
}



export default TodoForm;
export interface TodoItem {
    message:string;   
    isComplete:boolean;
}

export interface TodoItemsState{
    TodoItems:TodoItem[];
}
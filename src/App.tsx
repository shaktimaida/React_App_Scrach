import React from 'react';
import './App.css';
import TodoList from './todo/component/TodoList';
import Notification from './common/component/Notification';
import './css/common.css'

const App = () => (
    <div className="App">
        <Notification></Notification>
        <TodoList></TodoList>
    </div>
);

export default App;
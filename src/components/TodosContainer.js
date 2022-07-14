import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';
import Todos from './Todos';

const TodosContainer = () => {
    const todos = useSelector(state => (state.todos));
    // dispatch 함수 만들기
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    return (
        <div>
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
        </div>
    );
};

export default TodosContainer;
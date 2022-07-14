import React,{useState} from 'react';

const TodoList = ({todos, onToggle}) => {
    return (
        <ul>
            {
                todos.map(todo=>(
                    <TodoItems todo={todo} key={todo.id} onToggle={onToggle}/>
                ))
            }
        </ul>
    )
}
const TodoItems = ({todo, onToggle}) => {
    return (
        <li onClick={()=>onToggle(todo.id)}
        style={{ color: todo.done ? 'red' : 'black' }}
        >{todo.text}</li>
    )
}

const Todos = ({todos, onCreate, onToggle}) => {
    const [ text, setText ] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault(); // submit 이벤트가 발생했을 때 새로고침 방지
        onCreate(text);
        setText('');
    }
    console.log(todos);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text}
                placeholder="할 일을 등록하세요."
                onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;
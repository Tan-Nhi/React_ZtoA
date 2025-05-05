import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: " Crocodile T1 " },
    { id: 2, name: "Watching Youtube" },
  ])

  const crocodile = 'Crocodile T1';
  const age = 25;
  const data = {
    address: "hanoi",
    country: "Vietnam"
  }

  const addnewtodo = (name) => {
    alert(`Call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addnewtodo={addnewtodo}

      />
      <TodoData
        name={crocodile}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App

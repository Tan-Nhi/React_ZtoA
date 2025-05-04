import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {

  const crocodile = 'Crocodile T1';
  const age = 25;
  const data = {
    address: "hanoi",
    country: "Vietnam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={crocodile}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App

import "./App.css"
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
function App() {
  return <center className='todo-container'>
    <AppName />
    <AddTodo />
    <div className="items-container">
      <TodoItem
        content="Buy Milk" date="4/10/2023"
      />
      <TodoItem
        content="Go To College" date="4/10/2023"
      />
    </div>

  </center>
}

export default App; 
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosAction from './components/Todos/TodosAction';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  function todoDeleteHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function todoToggleHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function resetTodoHandler() {
    setTodos([]);
  }

  function clearCompletedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosAction
        resetTodo={resetTodoHandler}
        clearCompletedTodos={clearCompletedTodosHandler}
      />
      <TodoList
        todos={todos}
        todoDelete={todoDeleteHandler}
        todoToggle={todoToggleHandler}
      />
    </div>
  );
}

export default App;

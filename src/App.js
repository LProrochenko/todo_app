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

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosAction
          resetTodo={resetTodoHandler}
          clearCompletedTodos={clearCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        todoDelete={todoDeleteHandler}
        todoToggle={todoToggleHandler}
      />
      {completedTodosCount > 0 && (
        <h2>
          You have comleted {completedTodosCount}{' '}
          {completedTodosCount > 1 ? 'todos' : 'todo'}
        </h2>
      )}
    </div>
  );
}

export default App;

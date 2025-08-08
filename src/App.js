import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosAction from './components/Todos/TodosAction';

import './App.css';

const App = () => {
  // state
  const [todos, setTodos] = useState([]);

  // other
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  // functions
  const addTodo = useCallback((text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const toggleCompletedTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const resetTodos = useCallback(() => {
    setTodos([]);
  }, []);

  const deleteCompletedTodos = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  }, []);

  const getCompletedTodosText = () =>
    `${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`;

  return (
    <div className="app">
      <h1>My TodoList</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 && (
        <TodosAction
          resetTodos={resetTodos}
          deleteCompletedTodos={deleteCompletedTodos}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompletedTodo={toggleCompletedTodo}
      />
      {completedTodosCount > 0 && (
        <h2>You have comleted {getCompletedTodosText()}</h2>
      )}
    </div>
  );
};

export default App;

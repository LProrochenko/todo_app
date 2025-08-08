import Todo from './Todo';

import styles from './TodoList.module.css';

const TodoList = (props) => {
  // props
  const { todos, deleteTodo, toggleCompletedTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 ? (
        <h2>TodoList is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompletedTodo={toggleCompletedTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;

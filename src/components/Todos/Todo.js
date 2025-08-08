import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

import styles from './Todo.module.css';

const Todo = (props) => {
  // props
  const { todo, deleteTodo, toggleCompletedTodo } = props;

  // other
  const { isCompleted, id, text } = todo;

  return (
    <div
      className={`${styles.todo} ${isCompleted ? styles.completedTodo : ''}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleCompletedTodo(id)}
      />
    </div>
  );
};

export default Todo;

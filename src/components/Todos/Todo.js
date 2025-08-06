import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, todoDelete, todoToggle}) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ""}`}>
      <RiTodoFill className={styles.todoIcon}/>
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => todoDelete(todo.id)}/>
      <FaCheck className={styles.checkIcon} onClick={() => todoToggle(todo.id)}/>
    </div>
  );
}

export default Todo;

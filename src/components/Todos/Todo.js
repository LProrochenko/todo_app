import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, index }) {
  return (
    <div className={styles.todo}>
      <RiTodoFill className={styles.todoIcon}/>
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon}/>
      <FaCheck className={styles.checkIcon}/>
    </div>
  );
}

export default Todo;

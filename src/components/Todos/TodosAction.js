import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosAction.module.css';

function TodosAction({resetTodo, clearCompletedTodos}) {
  return (
    <div className={styles.todoActionContainer}>
      <Button title="Reset Todos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos" onClick={clearCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;

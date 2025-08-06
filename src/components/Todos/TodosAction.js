import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosAction.module.css';

function TodosAction() {
  return (
    <div className={styles.todoActionContainer}>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos">
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;

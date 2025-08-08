import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

import Button from '../UI/Button';

import styles from './TodosAction.module.css';

const TodosAction = (props) => {
  // props
  const { resetTodos, deleteCompletedTodos, completedTodosExist } = props;

  return (
    <div className={styles.todoActionContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosAction;
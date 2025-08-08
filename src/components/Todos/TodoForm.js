import { useState } from 'react';

import Button from '../UI/Button';

import styles from './TodoForm.module.css';

const TodoForm = (props) => {
  // props
  const { addTodo } = props;

  // state
  const [text, setText] = useState('');

  // handlers
  const submitHandler = (e) => {
    e.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    addTodo(trimmedText);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Type new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default TodoForm;

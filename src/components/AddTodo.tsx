import React, { useRef, useState } from 'react';
import type { Actions } from '../app';
import { st, classes } from './addtodo.st.css';

export interface AddTodoProps {
  dispatch: (dispatchData: Actions) => void;
  className?: string;
}

export const AddTodo = ({ dispatch, className }: AddTodoProps): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (textInputRef.current?.value) {
      dispatch({
        type: 'addTodo',
        payload: {
          id: Math.random().toString(),
          text: textInputRef.current.value,
        },
      });

      textInputRef.current.focus();
    }
  };

  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div className={st(classes.root, className)}>
      <form onSubmit={handleSubmit}>
        <label>Add a todo:</label>
        <input
          value={todoText}
          onChange={inputOnChangeHandler}
          type="text"
          ref={textInputRef}
          className={classes.input}
        ></input>
        <button type="submit">
          <div>Add todo</div>
        </button>
      </form>
    </div>
  );
};

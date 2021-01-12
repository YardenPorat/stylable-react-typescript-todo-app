import React, { useEffect, useRef, useState } from 'react';
import type { Todo } from '../models/todo.model';
import type { Actions } from '../app';
import { st, classes } from './todolist.st.css';

export interface TodoListProps {
  todos: Todo[];
  dispatch: (dispatchData: Actions) => void;
  className?: string;
}

export const TodoList = ({
  todos,
  dispatch,
  className,
}: TodoListProps): JSX.Element => {
  const [addedMsg, toggleAddedMsg] = useState(false);
  const [deletedMsg, toggleDeletedMsg] = useState(false);
  const todoCount = useRef(todos.length);

  useEffect(() => {
    if (todos.length > todoCount.current) {
      todoCount.current++;
      toggleAddedMsg(true);
      setTimeout(() => toggleAddedMsg(false), 2000);
    } else if (todos.length < todoCount.current) {
      todoCount.current--;
      toggleDeletedMsg(true);
      setTimeout(() => toggleDeletedMsg(false), 2000);
    }
  }, [todos]);

  const printTodos = (todos: Todo[]) => {
    return todos.map((todo) => {
      return (
        <div className={classes.todoline} key={todo.id}>
          <span>{todo.text}</span>
          <button
            className="button"
            onClick={() =>
              dispatch({ type: 'deleteTodo', payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </div>
      );
    });
  };

  return (
    <div className={st(classes.root, className)}>
      {addedMsg && <div>New todo was added</div>}
      {deletedMsg && <div>A todo was deleted</div>}
      <div>{printTodos(todos)}</div>
    </div>
  );
};

import React from 'react';
import type { Todo } from '../models/todo.model';
import { ACTIONS } from '../app';
import { st, classes } from './todolist.st.css';

export interface TodoListProps {
    todos: Todo[];
    dispatch: (dispatchData: { type: string; payload: { id: string; text?: string } }) => void;
    className?: string;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, dispatch, className }) => {
    const printTodos = (todos: Todo[]) => {
        return todos.map((todo) => {
            return (
                <div className={classes.todoline} key={todo.id}>
                    <span>{todo.text}</span>
                    <button
                        className="button"
                        onClick={() =>
                            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
                        }
                    >
                        Delete
                    </button>
                </div>
            );
        });
    };

    return <div className={st(classes.root, className)}>{printTodos(todos)}</div>;
};

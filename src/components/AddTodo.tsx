import React, { useRef } from 'react';
import { ACTIONS } from '../app';
import { st, classes } from './addtodo.st.css';

export interface AddTodoProps {
    dispatch: (dispatchData: { type: string; payload: { id: string; text: string } }) => void;
    className?: string;
}

export const AddTodo: React.FC<AddTodoProps> = ({ dispatch, className }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (textInputRef.current?.value) {
            dispatch({
                type: ACTIONS.ADD_TODO,
                payload: {
                    id: Math.random().toString(),
                    text: textInputRef.current.value,
                },
            });
        }
    };

    return (
        <div className={st(classes.root, className)}>
            <form onSubmit={handleSubmit}>
                <label>Add a todo:</label>
                <input type="text" ref={textInputRef} className={classes.input}></input>
                <button type="submit">
                    <div>Add todo</div>
                </button>
            </form>
        </div>
    );
};

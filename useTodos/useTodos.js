import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-use-reducer";


const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleRemoveTodo = (todoId) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todoId
        });
    }

    const handleToggleTodo = (todoId) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: todoId
        });
    }

    return (
        {
            todos,
            todosCount: todos.length,
            pendingTodosCount: todos.filter(todo => !todo.done).length,
            handleNewTodo,
            handleRemoveTodo,
            handleToggleTodo
        }
    )
}


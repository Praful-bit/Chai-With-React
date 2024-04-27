/* eslint-disable no-unused-vars */
import { useContext, createContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg ",
            checked: false
        },
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleTodo: (id) => { },
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
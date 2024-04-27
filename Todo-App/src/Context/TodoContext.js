/* eslint-disable no-unused-vars */
import {createContext,useContext} from 'react'

export const TodoContext = createContext({
    todos:[
       {
        id:1,
        todo:"todo msg",
        checked:false
       },
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo =()=>{
    useContext(TodoContext)
}
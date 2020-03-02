import {ADD_TODO, EDIT_TODO, INIT_TODOS, UPDATE_TODO} from "../actionTypes"

export const addTodo = (payload: ITodo) => ({type: ADD_TODO, payload})

export const initTodos = (payload: ITodo[]) => ({type: INIT_TODOS, payload})


export const editTodo = (payload: number) => ({type: EDIT_TODO, payload})

export const updateTodo = (payload: ITodo) => ({type: UPDATE_TODO, payload})

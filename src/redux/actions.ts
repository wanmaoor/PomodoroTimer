import {ADD_TODO, EDIT_TODO, INIT_TODOS, UPDATE_TODO} from "./actionTypes"

export const addTodo = (payload: any) => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const initTodos = (payload: any[]) => {
  return {
    type: INIT_TODOS,
    payload
  }
}


export const editTodo = (payload: any) => {
  return {
    type: EDIT_TODO,
    payload
  }
}

export const updateTodo = (payload: any) => {
  return {
    type: UPDATE_TODO,
    payload
  }
}

import {ADD_TODO, INIT_TODOS} from "./actionTypes"

export const addTodo = (payload: any) => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const initTodos = (payload: any) => {
  return {
    type: INIT_TODOS,
    payload
  }
}

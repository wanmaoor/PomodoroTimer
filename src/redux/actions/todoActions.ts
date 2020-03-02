import {ADD_TODO, EDIT_TODO, INIT_TODOS, UPDATE_TODO} from "../actionTypes"

export const addTodo = (payload: ITodo) => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const initTodos = (payload: ITodo[]) => {
  return {
    type: INIT_TODOS,
    payload
  }
}


export const editTodo = (payload: number) => {
  return {
    type: EDIT_TODO,
    payload
  }
}

export const updateTodo = (payload: ITodo) => {
  return {
    type: UPDATE_TODO,
    payload
  }
}

import {ADD_TODO, INIT_TODOS} from "../actionTypes"

export default function (state: Array<ITodo> = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case INIT_TODOS:
      return [...action.payload]
    default:
      return state
  }
}

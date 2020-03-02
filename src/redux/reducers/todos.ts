import {ADD_TODO, EDIT_TODO, INIT_TODOS, UPDATE_TODO} from "../actionTypes"

export default function (state: Array<any> = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case INIT_TODOS:
      return [...action.payload]
    case EDIT_TODO:
      return state.map(t => {
        if (t.id === action.payload) {
          return Object.assign({}, t, {editable: !t.editable})
        } else {
          return Object.assign({}, t, {editable: false})
        }
      })
    case UPDATE_TODO:
      return state.map(t => t.id === action.payload.id ? action.payload : t)
    default:
      return state
  }
}

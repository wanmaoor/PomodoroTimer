import {ADD_TODO} from "../actionTypes"

export default function (state: Array<ITodo>, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
  }
  return []
}

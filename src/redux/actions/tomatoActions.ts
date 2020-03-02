import {ADD_TOMATO} from "../actionTypes"

export const addTomato = (payload: any) => {
  return {
    type: ADD_TOMATO,
    payload
  }
}

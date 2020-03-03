import {ADD_TOMATO, INIT_TOMATOES, UPDATE_TOMATO} from "../actionTypes"

export const addTomato = (payload: any) => ({type: ADD_TOMATO, payload})

export const initTomatoes = (payload: any[]) => ({type: INIT_TOMATOES, payload})
export const updateTomato = (payload: any) => ({type: UPDATE_TOMATO, payload})

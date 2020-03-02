import {ADD_TOMATO, INIT_TOMATOES} from "../actionTypes"

export const addTomato = (payload: any) => ({type: ADD_TOMATO, payload})

export const initTomatoes = (payload: any[]) => ({type: INIT_TOMATOES, payload})

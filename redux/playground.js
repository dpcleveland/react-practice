/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'

/*
 * Action Creators
 */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const boundAddTodo = (text) => dispatch(addTodo(text))

boundAddTodo(text)

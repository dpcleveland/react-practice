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


/*
 *  Reducers
 */

{
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}`11`

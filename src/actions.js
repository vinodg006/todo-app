import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS,
} from "./actionTypes";

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: {
    item,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const clearCompletedTodos = () => ({
  type: CLEAR_COMPLETED_TODOS,
});

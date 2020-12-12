import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS,
} from "./actionTypes";
import todosList from "./todos.json";

let itemCounter = todosList.length + 1;
const initialState = todosList;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newItem = {
        id: itemCounter++,
        title: action.payload.item,
        completed: false,
      };
      return [...state, newItem];
    }

    case TOGGLE_TODO: {
      const updatedTodo = state.map((item) => {
        if (item.id === action.payload.id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return updatedTodo;
    }

    case DELETE_TODO: {
      const updatedTodo = state.filter((todo) => todo.id !== action.payload.id);
      return updatedTodo;
    }

    case CLEAR_COMPLETED_TODOS: {
      const updatedTodo = state.filter((todo) => !todo.completed);
      return updatedTodo;
    }

    default:
      return state;
  }
};

export default todos;

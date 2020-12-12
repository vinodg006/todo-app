## Todos using React Redux

Technical Details

Conceptually, all of the business logic contained in your event handler functions will now become action creator functions. One exception to be careful of is the handleCreate event handler; there is an if statement that checks whether the key pressed was an Enter key or not. That logic should stay in your handleCreate event handle because it is logic directly related to handling the DOM event. However, all the other code is business logic that can be moved to an action creator function that could be called addTodo.

Every action creator will have an associated action type constant. For example, the addTodo action creator will return an action object whose type property will be ADD_TODO.

Some event handler methods had to be passed down as props two times. For example, the handleDelete handler was defined in the App component and it was passed down to TodoList and then passed down again to TodoItem. With Redux, we do not have to pass down props multiple times. You should only have to pass down props a maximum of one time.

You can achieve this by using connect to connect any component to read data from the redux store (via mapStateToProps) or to fire an action creator (via mapDispatchToProps).


## Action Type Constants

Action type constants should be defined with names TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS. Action type constants should be in a separate file, actionTypes.js

## Action Creator Functions

Action creator functions should be defined with names toggleTodo, addTodo, deleteTodo, clearCompletedTodos. Each action creator function should return an action object with the correct action type constant. Action creator functions should be in a separate file, actions.js

## Reducer Skeleton Function

The reducer function should take two arguments, state and action. The state parameter should also have a default parameter value of initialState (defined by you). The implementation of the reducer function should use a switch statement. The switch statement should include a default case which returns the existing state. The reducer function should be in a separate file, reducer.js

## Reducer Cases

There should be cases for each of the action type constants. Additionally, each of those cases should follow immutability practices by modifying only copies of state and then returning the new modified copy.

## Provider/store

The store should be created by passing the reducer to the createStore method from redux. The application should have the <Provider> component nested directly within the <BrowserRouter> component on index.js. The store should be passed as a prop to the Provider component likes so: <Provider store={store}>

## connect with mapStateToProps

Every component that needs state from Redux should have a mapStateToProps function created at the bottom of the component that dictates which parts of state that it wants mapped to its props. This will look like the following: export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)

## connect with mapDispatchToProps

Every component that needs to fire an action in Redux should have a mapDispatchToProps function created at the bottom of the component that includes dispatch functions that will dispatch an action creator. This will look like the following export default connect(mapStateToProps, mapDispatchToProps)(ComponentName) -->

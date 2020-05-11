import React, { useReducer } from 'react';
import './App.css';
import ComponentC from "./components/ComponentC";

export const EmployeeContext = React.createContext();
export const TeamContext = React.createContext();

const initialState = {
  tasksForJoe: 2,
};
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {...state, tasksForJoe: state.tasksForJoe + 1};
    case 'decrement':
      if( state.tasksForJoe > 0)
        return {...state, tasksForJoe: state.tasksForJoe - 1};
      return {...state, tasksForJoe: 0};
    case 'reset':
      return {...state, tasksForJoe: initialState.tasksForJoe};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer( reducer, initialState );

  return (
    <div className="App">
      <h1>The Office</h1>
      <p>Work for Joe to do: {state.tasksForJoe} tasks.</p>
      <button onClick={() => dispatch({type: 'decrement'})}>Complete 1 Task</button>
      <button onClick={() => dispatch({type: 'increment'})}>Scope creep creates 1 new Task</button>
      <button onClick={() => dispatch({type: 'reset'})}>Delegate tasks to Nate and Prachi</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <TeamContext.Provider value={'Trogdor'}>
        <EmployeeContext.Provider value={'Joe Broderick'}>
          <ComponentC />
        </EmployeeContext.Provider>
      </TeamContext.Provider>
    </div>
  );
}

export default App;

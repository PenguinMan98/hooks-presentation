import React, { useReducer } from 'react';
import './App.css';
import ComponentC from "./components/ComponentC";

export const EmployeeContext = React.createContext();
export const TeamContext = React.createContext();

const initialState = {
  tasksForJoe: 2,
  tasksForTyler: 3,
};
const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementJoe':
      return {...state, tasksForJoe: state.tasksForJoe + 1};
    case 'decrementJoe':
      if( state.tasksForJoe > 0)
        return {...state, tasksForJoe: state.tasksForJoe - 1};
      return {...state, tasksForJoe: 0};
    case 'resetJoe':
      return {...state, tasksForJoe: initialState.tasksForJoe};
    case 'incrementTyler':
      return {...state, tasksForTyler: state.tasksForTyler + 1};
    case 'decrementTyler':
      if( state.tasksForTyler > 0)
        return {...state, tasksForTyler: state.tasksForTyler - 1};
      return {...state, tasksForTyler: 0};
    case 'resetTyler':
      return {...state, tasksForTyler: initialState.tasksForTyler};
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
      <button onClick={() => dispatch({type: 'decrementJoe'})}>Complete 1 Task</button>
      <button onClick={() => dispatch({type: 'incrementJoe'})}>Scope creep creates 1 new Task</button>
      <button onClick={() => dispatch({type: 'resetJoe'})}>Delegate tasks to Nate and Prachi</button>
      <p>Work for Tyler to do: {state.tasksForTyler} tasks.</p>
      <button onClick={() => dispatch({type: 'decrementTyler'})}>Complete 1 Task</button>
      <button onClick={() => dispatch({type: 'incrementTyler'})}>Scope creep creates 1 new Task</button>
      <button onClick={() => dispatch({type: 'resetTyler'})}>Delegate tasks to Nate and Prachi</button>
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

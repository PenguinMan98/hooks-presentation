import React, { useReducer } from 'react';
import './App.css';
import ComponentC from "./components/ComponentC";

export const EmployeeContext = React.createContext();
export const TeamContext = React.createContext();

const initialState = {
  tasks: 2,
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {...state, tasks: state.tasks + 1};
    case 'decrement':
      if( state.tasks > 0)
        return {...state, tasks: state.tasks - 1};
      return {...state, tasks: 0};
    case 'reset':
      return {...state, tasks: initialState.tasks};
    default:
      return state;
  }
};

function App() {
  const [stateJoe, dispatchJoe] = useReducer( reducer, initialState );
  const [stateTyler, dispatchTyler] = useReducer( reducer, initialState );

  return (
    <div className="App">
      <h1>The Office</h1>
      <p>Work for Joe to do: {stateJoe.tasks} tasks.</p>
      <button onClick={() => dispatchJoe({type: 'decrement'})}>Complete 1 Task</button>
      <button onClick={() => dispatchJoe({type: 'increment'})}>Scope creep creates 1 new Task</button>
      <button onClick={() => dispatchJoe({type: 'reset'})}>Delegate tasks to Nate and Prachi</button>
      <p>Work for Tyler to do: {stateTyler.tasks} tasks.</p>
      <button onClick={() => dispatchTyler({type: 'decrement'})}>Complete 1 Task</button>
      <button onClick={() => dispatchTyler({type: 'increment'})}>Scope creep creates 1 new Task</button>
      <button onClick={() => dispatchTyler({type: 'reset'})}>Delegate tasks to Nate and Prachi</button>
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

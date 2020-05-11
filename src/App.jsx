import React, { useReducer } from 'react';
import './App.css';
import ComponentC from "./components/ComponentC";

export const EmployeeContext = React.createContext();
export const TeamContext = React.createContext();

const initialState = 2;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      if( state > 0)
        return state - 1;
      return 0;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer( reducer, initialState );

  return (
    <div className="App">
      <h1>The Office</h1>
      <p>Work for Joe to do: {count} tasks.</p>
      <button onClick={() => dispatch('decrement')}>Complete 1 Task</button>
      <button onClick={() => dispatch('increment')}>Scope creep creates 1 new Task</button>
      <button onClick={() => dispatch('reset')}>Delegate tasks to Nate and Prachi</button>
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

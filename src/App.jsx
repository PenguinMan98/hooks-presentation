import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const EmployeeContext = React.createContext();
export const TeamContext = React.createContext();

const initialState = {
  tasks: 2,
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {...state, tasks: state.tasks + 2};
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
  const [state, dispatch] = useReducer( reducer, initialState );

  return (
    <div className="App">
      <h1>The Office</h1>
      <p>Work for Team Trogdor to do: {state.tasks} tasks.</p>
      <button onClick={() => dispatch({type: 'decrement'})}>Complete 1 Task</button>
      <button onClick={() => dispatch({type: 'increment'})}>Bluebird integration creates 2 new Tasks</button>
      <button onClick={() => dispatch({type: 'reset'})}>Delegate tasks to TLT</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <TeamContext.Provider value={'Trogdor'}>
        <EmployeeContext.Provider value={{'emp1':'Joe Broderick','emp2':'Tyler Hanson','empBest':'Jaden He'}}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </EmployeeContext.Provider>
      </TeamContext.Provider>
    </div>
  );
}

export default App;

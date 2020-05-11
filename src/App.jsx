import React from 'react';
import './App.css';
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

export const EmployeeContext = React.createContext();
export const TeamContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1>The Office</h1>
      {/*<ComponentA />*/}
      {/*<ComponentB />*/}
      <TeamContext.Provider value={'Trogdor'}>
        <EmployeeContext.Provider value={'Joe Broderick'}>
          <ComponentC />
        </EmployeeContext.Provider>
      </TeamContext.Provider>
    </div>
  );
}

export default App;

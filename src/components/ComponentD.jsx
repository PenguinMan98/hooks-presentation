import React, {useContext} from 'react';
import {CountContext, EmployeeContext, TeamContext} from '../App';

const ComponentD = () => {
  const employee = useContext(EmployeeContext);
  const team = useContext(TeamContext);
  const {numTasks, taskDispatcher} = useContext(CountContext);

  return (
    <div>
      <div>{employee.emp2} from team {team} is the CDC recommended distance away in Component D</div>
      <div>The team has {numTasks} tasks to do.</div>
      <button onClick={() => taskDispatcher({type: 'decrement'})}>Complete 1 Task</button>
      <button onClick={() => taskDispatcher({type: 'increment'})}>Bluebird integration creates 2 new Tasks</button>
      <button onClick={() => taskDispatcher({type: 'reset'})}>Delegate tasks to TLT</button>
    </div>
  );
};

export default ComponentD;

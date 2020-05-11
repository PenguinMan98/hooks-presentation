import React, {useContext} from 'react';
import {EmployeeContext, TeamContext} from '../App';

const ComponentA = () => {
  const employee = useContext(EmployeeContext);
  const team = useContext(TeamContext);

  return (
    <div>
      <div>{employee.empBest} from team {team} is the CDC recommended distance away in Component A</div>
    </div>
  );
};

export default ComponentA;

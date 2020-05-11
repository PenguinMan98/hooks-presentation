import React, {useContext} from 'react';
import {EmployeeContext, TeamContext} from '../App';

const ComponentD = () => {
  const employee = useContext(EmployeeContext);
  const team = useContext(TeamContext);

  return (
    <div>
      <div>{employee.emp2} from team {team} is the CDC recommended distance away in Component D</div>
    </div>
  );
};

export default ComponentD;

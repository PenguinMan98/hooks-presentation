import React, {useContext} from 'react';
import {EmployeeContext, TeamContext} from '../App';

const ComponentF = () => {
  const employee = useContext(EmployeeContext);
  const team = useContext(TeamContext);

  return (
    <div>
      <div>{employee} from team {team} is the CDC recommended distance away in Component F</div>
    </div>
  );
};

export default ComponentF;

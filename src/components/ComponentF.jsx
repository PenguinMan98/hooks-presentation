import React from 'react';
import {EmployeeContext} from '../App';
import {TeamContext} from '../App';

const ComponentF = () => {
  return (
    <div>
      <TeamContext.Consumer>
        {
          team => {
            return <EmployeeContext.Consumer>
              {
                employee => {
                  return <div>{employee} from team {team} is the CDC recommended distance away in Component F</div>
                }
              }
            </EmployeeContext.Consumer>
          }
        }
      </TeamContext.Consumer>

    </div>
  );
};

export default ComponentF;

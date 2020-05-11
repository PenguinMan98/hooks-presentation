import React, { useState } from 'react';

const DistractionCounter = () => {
  const [count, setCount] = useState(0);

  const addFive = () => {
    for(let i = 0; i < 5; i++) {
      setCount( count + 1 );
    }
  };

  // const addFive = () => {
  //   for(let i = 0; i < 5; i++) {
  //     setCount(prev => prev + 1);
  //   }
  // };
  //
  return (
    <div>
      Number of Distractions Today:
      <button onClick={addFive}>
        {count}
      </button>
    </div>
  );
};

export default DistractionCounter;

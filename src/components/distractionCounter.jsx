import React, { useState } from 'react';

const DistractionCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Number of Distractions Today:
      <button onClick={() => {
        setCount(count + 1);
      }}>
        {count}
      </button>
    </div>
  );
};

export default DistractionCounter;

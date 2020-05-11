import React, { useState, useEffect } from 'react';

const DistractionCounter = () => {
  const [name, setName] = useState({first: '', last: ''});
  const [timer, setTimer] = useState(0);
  let startTime = 0;

  const tick = () => {
    console.log('ticking', startTime, timer);
    const elapsed = parseInt((Date.now() - startTime) / 1000);
    setTimer(elapsed);
  };

  useEffect(() => {
    startTime = Date.now();

    const tickInterval = setInterval(tick, 1000);

    return () => {
      clearInterval(tickInterval);
    }
  }, []);

  return (
    <div>
      Who is distracting me now?<br />
      <input type="text" onChange={e => setName({...name, first: e.target.value})} value={name.first} /><br />
      <input type="text" onChange={e => setName({...name, last: e.target.value})} value={name.last} /><br />
      {name.first} {name.last} is!<br />
      They have been distracting me for {timer} seconds!
    </div>
  );
};

export default DistractionCounter;

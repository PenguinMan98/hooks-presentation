import React, { useState, useEffect } from 'react';

const DistractionCounter = () => {
  const [name, setName] = useState({first: '', last: ''});
  const [timer, setTimer] = useState(Date.now());
  let startTime = timer;

  const tick = () => {
    const elapsed = Date.now() - timer;
    setTimer(prev => prev + elapsed);
  };

  useEffect(() => {
    startTime = Date.now();
    const tickInterval = setInterval(tick, 1000);

    clearInterval(tickInterval);
  });

  const formatTime = (start, now) => {
    return parseInt((now - start) * 1000);
  };

  return (
    <div>
      Who is distracting me now?<br />
      <input type="text" onChange={e => setName({...name, first: e.target.value})} value={name.first} /><br />
      <input type="text" onChange={e => setName({...name, last: e.target.value})} value={name.last} /><br />
      {name.first} {name.last} is!<br />
      They have been distracting me for {formatTime(startTime, timer)} seconds!
    </div>
  );
};

export default DistractionCounter;

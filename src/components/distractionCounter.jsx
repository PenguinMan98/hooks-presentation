import React, { useState, useEffect } from 'react';

const DistractionCounter = () => {
  const [name, setName] = useState({first: '', last: ''});
  const [timer, setTimer] = useState(0);
  const [fullName, setFullName] = useState('');
  const [buttonClickedOn, setButtonClickedOn] = useState(0);
  let startTime = 0;
  let tickInterval;

  const tick = () => {
    console.log('ticking', startTime, timer);
    const elapsed = parseInt((Date.now() - startTime) / 1000);
    setTimer(elapsed);
  };

  const startTimer = () => {
    setButtonClickedOn(Date.now());

    if(timer === 0){
      startTime = Date.now();

      tickInterval = setInterval(tick, 1000);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(tickInterval);
    }
  }, []);

  useEffect(() => {
    setFullName(`${name.first} ${name.last}`);
  }, [buttonClickedOn]);

  return (
    <div>
      Who is distracting me now?<br />
      <input type="text" onChange={e => setName({...name, first: e.target.value})} value={name.first} /><br />
      <input type="text" onChange={e => setName({...name, last: e.target.value})} value={name.last} /><br />
      {fullName} is!<br />
      <button onClick={startTimer}>  Go  </button><br />
      They have been distracting me for {timer} seconds!
    </div>
  );
};

export default DistractionCounter;

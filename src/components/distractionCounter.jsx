import React, { useState } from 'react';

const DistractionCounter = () => {
  const [name, setName] = useState({first: '', last: ''});

  return (
    <div>
      Who is distracting me now?<br />
      <input type="text" onChange={e => setName({first: e.target.value})} value={name.first} /><br />
      <input type="text" onChange={e => setName({last: e.target.value})} value={name.last} /><br />
      {name.first} {name.last} is!<br />
      {/*{JSON.stringify(name)}*/}
    </div>
  );
};

export default DistractionCounter;

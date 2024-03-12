import React, { useState } from 'react'
import { Child } from './Child';

export const Example2 = () => {
  const [name, setName] = useState("Aliaskar");

  const handleChangeName = () => {
    setName("Shashan");
  };

  return (
    <>
      <h1>Name: {name}</h1>

      Child Name: <Child propValue={name} />
      <button onClick={handleChangeName}>Change name</button>
    </>
  );
};
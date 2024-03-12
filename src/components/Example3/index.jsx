import { useState } from "react";
import { Child } from "./Child";

export const Example3 = () => {
  const [state, setState] = useState({
    profile: {
      firstName: 'Aliaskar',
      lastName: 'Urakov',
      age: 30
    }
  })

  const handleClick = () => {
    // cloning object like this will not create new object but references to the existing one. Thus state will not change.
    const newState = state;

    // One solution is to make shallow or deep copy depending on how nested your object is, using any copying techniques.
    // const newState = { ...state };
    // const newState = JSON.parse(JSON.stringify(obj));

    //Then you can mutate new object not the current state
    newState.profile.age = newState.profile.age - 1;

    console.log(newState)

    setState(newState);
  }

  return (
    <>
      <Child data={state.profile} />
      <button onClick={handleClick}>Make me younger</button>
    </>
  );
};
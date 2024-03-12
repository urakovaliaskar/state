import React, { useState } from 'react'
import { Child } from './Child';

export const Example1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    
    // Here if we update immediately after, it will not update correctly
    // Comment this line and uncomment the next
    setCount(count + 1);

    // Solution to use callback to get correct value
    // setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <Child propValue={count} />
      <button onClick={handleClick}> Count by + 2 </button>
    </>
  )
}

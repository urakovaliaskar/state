import { useEffect, useState } from "react";

export const Child = ({ propValue }) => {
  // Here you directly pass the prop to use state, but it will not change when button to update the name is clicked
  const [name, setName] = useState(propValue);

  // Solution is to use the prop directly or use useEffect if you can't use directly
  // useEffect(() => {
  //   setName(propValue)
  // }, [propValue]);

  return (
    <div>
      { name }
    </div>
  )
};

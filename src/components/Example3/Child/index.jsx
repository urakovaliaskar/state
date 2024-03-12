export const Child = ({ data }) => {
  const {firstName, lastName, age } = data;

  return (
    <div >
      First Name: { firstName }, 
      Last Name: { lastName }, 
      Age: { age }
    </div>
  )
};

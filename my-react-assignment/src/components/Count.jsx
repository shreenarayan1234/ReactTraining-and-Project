// eslint-disable-next-line react/prop-types
const Count = ({ number }) => {
  return <span>{number}</span>;
};

// eslint-disable-next-line react/prop-types
export const CountLevel = ({ number }) => {
  return <p>The current count is: {number}</p>;
};
export default Count;

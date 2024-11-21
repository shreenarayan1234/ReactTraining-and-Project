// eslint-disable-next-line react/prop-types
const Button = ({ update }) => {
  return (
    <button style={{ margin: "10px", padding: "10px" }} onClick={update}>
      +
    </button>
  );
};

export default Button;

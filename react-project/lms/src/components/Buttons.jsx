const Button = () => {
  const handleClick = (message) => {
     alert(message)
  }

  return (
    <>
        <button onClick={() => handleClick("Thank you for clicking!")}>
          Click Me
        </button>
    </>
  );
};

export default Button
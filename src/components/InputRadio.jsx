function InputRadio(props) {
  const { percentage } = props;

  const handleInput = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  };

  return (
    <label>
      <span className="block text-2xl text-white bg-very-dark-cyan h-12 text-center rounded-md ease-in-out duration-200 hover:cursor-pointer hover:bg-strong-cyan hover:text-very-dark-cyan font-bold leading-[46px]">
        {percentage}%
      </span>
      <input
        type="radio"
        name="percentage"
        value={percentage}
        onClick={(event) => handleInput(event)}
      />
    </label>
  );
}

export default InputRadio;

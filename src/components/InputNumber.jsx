function InputNumber(props) {
  const { icon } = props;

  const handleInput = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="0"
        className="bg-very-light-grayish-cyan w-full px-4 p-1 rounded-md text-very-dark-cyan text-2xl font-bold text-right relative"
        onChange={(event) => handleInput(event)}
      />
      <img src={icon} alt="icon" className="absolute -mt-[30px] ml-4" />
    </div>
  );
}

export default InputNumber;

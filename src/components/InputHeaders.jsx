function InputHeaders(props) {
  const { text } = props;

  return (
    <div className="flex justify-between pb-2">
      <p className="block text-dark-grayish-cyan font-bold">{text}</p>
      <span className={"text-red-500 font-semibold"}>Cant be zero</span>
    </div>
  );
}

export default InputHeaders;

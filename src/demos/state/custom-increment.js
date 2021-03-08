import { useState } from "react";
function CustomIncrement() {
  const [value, setValue] = useState(0);
  const [incrementNum, setIncrementNum] = useState(1);
  const [text, setText] = useState("Add");

  const onValueChange = () => {
    setValue(value + incrementNum);
  };

  const onIncrementChange = (event) => {
    const newIncrementNum = parseFloat(event.target.value);
    setIncrementNum(newIncrementNum);

    if (incrementNum > 0) {
      setText("Add ");
    } else {
      setText("Subtract ");
    }
  };

  const onResetClick = () => {
    setValue(0);
    setIncrementNum(1);
  };
  //   const onMessageChange = () => {
  //     if (incrementNum > 0) {
  //       setText("Add: ");
  //     } else {
  //       setText("Subtract: ");
  //     }
  //   };
  return (
    <div>
      <div>The current value is {value}</div>
      <div>The current increment is {incrementNum}</div>
      <button onClick={onValueChange}>
        {text} {incrementNum}
      </button>
      <button onClick={onResetClick}>Reset</button>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value={incrementNum}
        onChange={onIncrementChange}
      ></input>
    </div>
  );
}

export default CustomIncrement;

import CounterButton from "./CounterButton";
import { useState } from "react";

const CounterClick = () => {
  const [value, setValue] = useState(0);
  const add = () => {
    setValue(value + 1);
  };

  const subtract = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex flex-col items-center w-80 h-72 border-2 border-black pt-8 rounded-3xl">
      <div className="flex items-center justify-center w-4/5 h-2/5 border-2 border-black text-7xl rounded-2xl">
        {value}
      </div>
      <CounterButton 
        add={add}
        subtract={subtract}
      />
    </div>
  );
};

export default CounterClick;

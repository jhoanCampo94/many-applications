interface  ICounterButton {
  add: () => void;
  subtract: () => void;
}

const CounterButton = ({ add, subtract }: ICounterButton) => {


  return (
    <div className="flex justify-center items-center gap-4 w-4/5 h-2/5">
      <button
        className="w-2/5 border-2 border-none p-2 rounded-3xl bg-green-400 text-5xl cursor-pointer hover:bg-green-600"
        onClick={add}
      >
        +
      </button>
      <button
        className="w-2/5 border-2 border-none p-2 rounded-3xl bg-red-400 text-5xl cursor-pointer hover:bg-red-600"
        onClick={subtract}
      >
        -
      </button>
    </div>
  );
};

export default CounterButton;

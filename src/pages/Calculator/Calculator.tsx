import { useState } from "react";
import ArrowLeft from "../../components/Icons/ArrowLeft"
import Button from "./Button"
import Input from "./Input"

const Calculator = () => {

  const [input, setInput] = useState("");
  const [lastResult, setLastResult] = useState<string | null>(null);

  const buttonClick = (value: string) => {
    if (lastResult && /[0-9]/.test(value)) {
      setInput(value);
      setLastResult(null);
      return;
    }

    if (/[+\-*./]/.test(value)) {
      const lastChar = input.slice(-1);
      if (/[+\-*./]/.test(lastChar)) {
        return;
      }
    }

    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      setLastResult(result.toString());
    } catch (error) {
      setInput("Error" + error);
      setLastResult(null);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLastChar = () => {
    setInput(input.slice(0, -1));
  };


  return (
    <div className="grid grid-flow-col grid-rows-6 gap-4 w-80 h-auto bg-neutral-950 p-8 rounded-2xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500">
      <Input value={input} />
      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <Button onClick={() => buttonClick("7")}>7</Button>
        <Button onClick={() => buttonClick("8")}>8</Button>
        <Button onClick={() => buttonClick("9")}>9</Button>
        <Button onClick={() => buttonClick("/")}>/</Button>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <Button onClick={() => buttonClick("4")}>4</Button>
        <Button onClick={() => buttonClick("5")}>5</Button>
        <Button onClick={() => buttonClick("6")}>6</Button>
        <Button onClick={() => buttonClick("*")}>*</Button>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <Button onClick={() => buttonClick("1")}>1</Button>
        <Button onClick={() => buttonClick("2")}>2</Button>
        <Button onClick={() => buttonClick("3")}>3</Button>
        <Button onClick={() => buttonClick("+")}>+</Button>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <Button onClick={() => buttonClick("**")}>**</Button>
        <Button onClick={() => buttonClick("0")}>0</Button>
        <Button onClick={() => buttonClick(".")}>.</Button>
        <Button onClick={() => buttonClick("-")}>-</Button>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <Button onClick={clearInput}>C</Button>
        <Button onClick={calculateResult}>=</Button>
        <Button onClick={deleteLastChar}><ArrowLeft /></Button>
      </div>
    </div>
  )
}

export default Calculator
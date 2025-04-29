import React from "react";

interface ICalculatorButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ICalculatorButtonProps) => {

  const buttonIsNumber = (children: React.ReactNode) => {
    if (React.isValidElement(children)) return false;
    if (typeof children === 'string') return !isNaN(Number(children));
    return typeof children === 'number';
  };

  const buttonIsClear = (children: React.ReactNode) => {
    return children === 'C';
  };


  return (
    <button className={`
      rounded-2xl text-2xl text-white flex items-center justify-center cursor-pointer
      ${buttonIsNumber(children) ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-500 hover:bg-gray-600'} 
      ${buttonIsClear(children) ? 'col-span-2' : 'w-14 h-14'}`
    }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
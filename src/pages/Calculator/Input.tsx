interface InputProps {
  value: string;
}

const Input = ({value}: InputProps) => {
  return (
    <div className="w-full h-full bg-neutral-800 border-2 border-cyan-500 rounded-2xl text-2xl text-cyan-500 flex items-center justify-end p-2">
      {value}
    </div>
  )
}

export default Input
import { useState } from "react";

interface IBlockLetterSelectedProps {
  valueGroup: { letter: string; value: string }[];
  hiddenWord: string;
}
const InputWord = ({ valueGroup, hiddenWord }: IBlockLetterSelectedProps) => {
  const [word, setWord] = useState("");

  return (
    <div className="flex items-center gap-2 w-4/5b h-40 px-4">
      {valueGroup.map((letter, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-14 h-14 border-2 bg-gray-400 font-bold text-2xl ${word === hiddenWord ? "bg-green-400" : (word !== hiddenWord && word !== "" && hiddenWord !== "") ? "bg-red-400" : ""}`}
        >
          <span>{letter.value}</span>
        </div>
      ))}
      <input
        type="text"
        placeholder="¿Cuál es la palabra?"
        className="w-full px-4 py-2 mt-1 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
        onChange={(e) => setWord(e.target.value.toLocaleUpperCase())}
        value={word}
      />
    </div>
  );
};

export default InputWord;

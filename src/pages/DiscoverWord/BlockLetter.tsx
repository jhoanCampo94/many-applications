interface IBlockLetterProps {
  alphabet: {
    letter: string;
    value: string;
    color: string;
  }[];
  handleClick: (letter: {letter: string; value: string}) => void;
}
const BlockLetter = ({ alphabet, handleClick }: IBlockLetterProps) => {
  return (
    <div className="flex items-center gap-2 w-4/5b h-40 px-4">
      {alphabet.map((letter) => (
        <div
          key={letter.value}
          className={`flex flex-col items-center w-14 h-14 border-2 border-black ${letter.color}`}
          onClick={() => handleClick({letter: letter.letter, value: letter.value})}
        >
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {letter.letter}
          </span>
          <span>{letter.value}</span>
        </div>
      ))}
    </div>
  );
};

export default BlockLetter;

import BlockLetter from "./BlockLetter";
// import BlockLetterSelected from "./BlockLetterSelected";
import { alphabet } from "../../Javascript/alphabet";
import { useState } from "react";
import InputWord from "./InputWord";

interface IDiscoverWord {
  letter: string;
  value: string;
}
const DiscoverWord = () => {
  const [valueGroup, setValueGroup] = useState<IDiscoverWord[]>([]);

  const handleClick = (selectedLetter: { letter: string; value: string }) => {
    setValueGroup([...valueGroup, selectedLetter]);
  };

  const hiddenLetters = valueGroup.map((block) => {
    return block.letter;
  });

  const hiddenWord = hiddenLetters.join("");

  return (
    <>
      <BlockLetter alphabet={alphabet} handleClick={handleClick} />
      <InputWord valueGroup={valueGroup} hiddenWord={hiddenWord}/>
    </>
  );
};

export default DiscoverWord;

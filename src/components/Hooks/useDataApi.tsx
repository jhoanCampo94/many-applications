import { useEffect, useState } from "react";
import { ICharacterRickAndMorthy } from "../../interfaces/ICharacterRickAndMorthy";
const useDataApi = (url: string) => {
  const [characters, setCharacters] = useState<ICharacterRickAndMorthy[]>([]);
  const [info, setInfo] = useState({
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  });

  const getCharacters = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    setInfo(data.info);
  };

  const onPrevious = () => {
    if (info.prev) {
      getCharacters(info.prev);
    }
  };

  const onNext = () => {
    if (info.next) {
      getCharacters(info.next);
    }
  };

  useEffect(() => {
    getCharacters(url);
  }, [url]);

  return {
    characters,
    info,
    onPrevious,
    onNext,
  };
};

export default useDataApi;

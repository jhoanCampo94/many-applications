import useDataApi from "../../components/Hooks/useDataApi";
import Character from "./Character";
import Pagination from "./Pagination";

const ApiRickAndMorthy = () => {

  const { characters, info, onPrevious, onNext } = useDataApi("https://rickandmortyapi.com/api/character");
  
  return (
    <div className="grid grid-cols-1 w-4/5 h-auto border-4 border-l-emerald-300 bg-black text-emerald-300 p-8 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex justify-center items-center gap-4 w-1/4 h-20 col-span-full mx-auto">
        <Pagination 
          previous={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext}
        />
      </div>
      <Character characters={characters}/>
    </div>
  );
};

export default ApiRickAndMorthy;

import { ICharacterRickAndMorthy } from "../../interfaces/ICharacterRickAndMorthy";

const Character = ({
  characters,
}: {
  characters: ICharacterRickAndMorthy[];
}) => {
  return (
    <>
      {characters.map((character) => (
        <div
          key={character.id}
          className="w-full border-2 border-l-emerald-300 p-4"
        >
          <div className="w-4/5 mx-auto">
            <img
              className="w-full rounded-full"
              src={character.image}
              alt={character.name}
            />
          </div>
          <div className="text-center">
            <h3>{character.name}</h3>
            <p>{character.species}</p>
            <p>{character.location.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Character;

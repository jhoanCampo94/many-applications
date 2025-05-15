interface ILocation {
  name: string,
  url?: string,
}

export interface ICharacterRickAndMorthy {
  id: number,
  image: string,
  name: string,
  species: string,
  location: ILocation,
}
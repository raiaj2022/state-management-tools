import { makeAutoObservable } from "mobx";

class Character {
  constructor(id, name) {
    makeAutoObservable(this);
    this.id = id;
    this.name = name;
  }

  get getName() {
    return this.name;
  }
}

class CharactersStore {
  characters = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCharacters() {
    await fetch("https://rickandmortyapi.com/api/character")
      .then((r) => r.json())
      .then((res) => {
        this.characters = res.results.map(
          ({ id, name }) => new Character(id, name)
        );
      });
  }
}

export const charactersStore = new CharactersStore();

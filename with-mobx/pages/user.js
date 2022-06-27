import { observer } from "mobx-react-lite";
import { NavBar } from "../components/navBar";
import { charactersStore } from "../mobx/CharactersStore";
import React from "react";

const User = observer(() => {
  const { characters } = charactersStore;

  return (
    <>
      <NavBar />
      <h1>User Page</h1>
      {characters.map((character) => {
        return <p key={character.id}>{character.getName}</p>
      })}
    </>
  )
});

export default User;

import { NavBar } from "../components/navBar";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { charactersStore } from "../mobx/CharactersStore";

const Home = observer(() => {
  const { characters } = charactersStore;

  useEffect(() => {
    (async () => {
      await charactersStore.fetchCharacters();
    })()
  }, [])

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {characters.map((character) => (
          <p key={character.id}>{character.getName}</p>
      ))}
    </>
  )
  
})

export default Home;

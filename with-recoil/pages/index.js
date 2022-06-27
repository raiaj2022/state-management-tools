import { NavBar } from "../components/navBar";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export const charactersState = atom({
  key: 'charactersState',
  default: ''
})

export default function Home() {
  const [characters, setCharacters] = useRecoilState(charactersState);

  useEffect(() => {
    (async () => {
      let response = await fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json());
      setCharacters(response);
    })()
  }, [])

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {characters.results?.map((character) => {
        return <p key={character.id}>{character.name}</p>
      })}
    </>
  )
}

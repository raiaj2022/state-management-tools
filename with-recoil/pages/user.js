import { NavBar } from "../components/navBar";
import { useRecoilValue,selector } from "recoil";
import { charactersState } from ".";

const charactersStateSelector = selector({
  key: 'charactersStateSelector', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const characters = get(charactersState);

    return characters;
  },
});

export default function User(props) {
  const characters = useRecoilValue(charactersStateSelector);
  return (
    <>
      <NavBar />
      <h1>User Page</h1>
      {characters.results?.map((character) => {
        return <p key={character.id}>{character.name}</p>
      })}
    </>
  )
}

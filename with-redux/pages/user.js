import { NavBar } from "../components/navBar";
import { useSelector } from "react-redux";

export default function User(props) {
  const characters = useSelector((state) => state.data.characters);

  return (
    <>
      <NavBar />
      <h1>User Page</h1>
      {characters?.map((character) => {
        return <p key={character.id}>{character.name}</p>
      })}
    </>
  )
}

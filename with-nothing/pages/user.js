import { NavBar } from "../components/navBar";

export async function getServerSideProps() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  return {
    props: {
      characters: await res.json(),
    },
  };
}

export default function User(props) {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {props.characters.results.map((character) => {
        return <p key={character.id}>{character.name}</p>
      })}
    </>
  )
}

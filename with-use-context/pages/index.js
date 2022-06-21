import { useContext } from "react";
import { NavBar } from "../components/navBar";
import {FetchContext} from "../context/FetchContext";
import { useState } from "react";

export default function Home(props) {
  const {promise} = useContext(FetchContext);
  const [characterArray, setCharacterArray] = useState(null);

  promise?.then(({results}) => {
    setCharacterArray(results);
  })

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      
      {
        characterArray?.map((character) => <p key={character.id}>{character.name}</p>)
      }
    </>
  )
}

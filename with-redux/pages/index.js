import { NavBar } from "../components/navBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../redux/action";
import React from "react";


export default function Home(props) {
  const characters = useSelector((state) => state.data.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {characters?.map((character) => {
        return <p key={character.id}>{character.name}</p>
      })}
    </>
  )
}

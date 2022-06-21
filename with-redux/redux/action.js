import {
  GET_CHARACTERS
} from "./types";

export const getCharacters = () => async (dispatch) => {
  const responseData = await fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json());

  dispatch({
    type: GET_CHARACTERS,
    payload: responseData.results,
  });
};

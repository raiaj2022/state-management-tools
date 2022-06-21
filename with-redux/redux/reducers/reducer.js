import {
  GET_CHARACTERS
} from "../types";

const initialState = {
  characters: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    default:
      return state;
  }
};

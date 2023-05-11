import {
  SUCCESS_FETCH_ANIME,
  SUCCESS_FETCH_ANIME_DETAIL_TITLE,
  SUCCESS_FETCH_ANIME_DETAIL_PHOTO,
  SUCCESS_FETCH_ANIME_DETAIL,
} from "../actions/actionType";

const initialState = {
  animes: [],
  title: {},
  photo: {},
  detail: {},
};

export default function animeReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_FETCH_ANIME:
      return {
        ...state,
        animes: action.payload,
      };
    case SUCCESS_FETCH_ANIME_DETAIL_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SUCCESS_FETCH_ANIME_DETAIL_PHOTO:
      return {
        ...state,
        photo: action.payload,
      };
    case SUCCESS_FETCH_ANIME_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}

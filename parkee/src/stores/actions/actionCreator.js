import {
  SUCCESS_FETCH_ANIME,
  SUCCESS_FETCH_ANIME_DETAIL_TITLE,
  SUCCESS_FETCH_ANIME_DETAIL_PHOTO,
  SUCCESS_FETCH_ANIME_DETAIL
} from "./actionType";

const actionFetchAnime = (payload) => {
  return {
    type: SUCCESS_FETCH_ANIME,
    payload,
  };
};

const actionFetchAnimeDetailTitle = (payload) => {
  return {
    type: SUCCESS_FETCH_ANIME_DETAIL_TITLE,
    payload,
  };
};

const actionFetchAnimeDetailPhoto = (payload) => {
  return {
    type: SUCCESS_FETCH_ANIME_DETAIL_PHOTO,
    payload,
  };
};

const actionFetchAnimeDetail = (payload) => {
  return {
    type: SUCCESS_FETCH_ANIME_DETAIL,
    payload,
  };
};


export const handleFetchAnime = (page = 0) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: { page },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(actionFetchAnime(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleFetchAnimeDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(actionFetchAnimeDetailTitle(data.data.attributes.titles));
      dispatch(actionFetchAnimeDetailPhoto(data.data.attributes.posterImage));
      dispatch(actionFetchAnimeDetail(data.data.attributes));
    } catch (err) {
      console.log(err);
    }
  };
};

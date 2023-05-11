import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/card.css";

function Card() {
  const navigate = useNavigate();
  const { animes } = useSelector((state) => state.animeReducer);
  return (
    <>
      {animes.map((anime) => {
        return (
          <div className="col-sm-3">
            <div
              className="card"
              onClick={() => navigate(`/detail/${anime.id}`)}
            >
              <img src={anime.attributes.posterImage.medium} alt="Avatar" />
              <div className="container">
                <p>{anime.attributes.titles.en_jp}</p>
                <p>{anime.attributes.titles.ja_jp}</p>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
}

export default Card;

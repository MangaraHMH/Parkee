import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { handleFetchAnimeDetail } from "../stores/actions/actionCreator";
import "../style/detail.css";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { title, photo, detail } = useSelector((state) => state.animeReducer);

  useEffect(() => {
    dispatch(handleFetchAnimeDetail(id));
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate(`/`)}
      >
        Back
      </button>
      <div className="detail">
        <div className="card-detail">
          <img src={photo.medium} alt="Avatar" />
          <div className="container">
            <p>{title.en_jp}</p>
            <p>{title.ja_jp}</p>
            <p>{detail.synopsis}</p>
            <p>Rating : {detail.averageRating}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleFetchAnime } from "../stores/actions/actionCreator";
import Card from "../components/Card";
import "../style/home.css";

function Home() {
  const dispatch = useDispatch();

  var page = 0;

  useEffect(() => {
    dispatch(handleFetchAnime(page));
  }, [page]);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
      <div className="button">
        <div className="btn-prev">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => dispatch(handleFetchAnime((page -= 10)))}
          >
            Prev
          </button>
        </div>
        <div className="btn-next">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => dispatch(handleFetchAnime((page += 10)))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

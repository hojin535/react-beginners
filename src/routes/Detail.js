import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailOfMovie from "../components/DetailOfMovie";
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <div>
          <DetailOfMovie
            key={movies.id}
            coverImg={movies.medium_cover_image}
            title={movies.title_long}
            rating={movies.rating}
            torrents={movies.torrents}
            detailUrl={movies.url}
            download={movies.download_count}
          ></DetailOfMovie>
        </div>
      )}
    </div>
  );
}
export default Detail;

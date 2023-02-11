import { Link } from "react-router-dom";

function DetailOfMovie({
  coverImg,
  title,
  rating,
  torrents,
  detailUrl,
  download,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>
        <b> rating: {rating} </b>
      </p>
      <p>
        download: {download} times |
        <button
          type="button"
          onClick={() => {
            window.open(detailUrl);
          }}
        >
          more info
        </button>
      </p>
      <hr />
      download Link:
      {torrents.map((torrent, i) => (
        <div key={i}>
          <button
            onClick={() => {
              window.open(torrent.url);
            }}
          >
            torrent : {torrent.quality}
          </button>
        </div>
      ))}
    </div>
  );
}
export default DetailOfMovie;

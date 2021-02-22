import React from 'react';
import { useParams, useRouteMatch, useHistory} from 'react-router-dom'

export default function MovieList(props) {
  const { url } = useRouteMatch();
  const { id } = useParams();
  console.log(url)

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div key={movie.id}>
          <MovieDetails key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  let history = useHistory();

  function handleClick() {
    history.push(`/movies/${id}`)
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

import React from 'react';
import {useHistory, NavLink} from 'react-router-dom'

export default function SavedList(props) {

  let history = useHistory();

  function handleClick() {
    history.push(`/`)
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          className="saved-movie"
          key={movie.id}
          isActive={(match, location) => !match ? false : true}>
          
        {movie.title}
        </NavLink>
      ))}
      <div className="home-button" onClick={handleClick}>Home</div>
    </div>
  );
}

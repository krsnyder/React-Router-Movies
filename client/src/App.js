import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch} from 'react-router-dom'


import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data)
          // console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  let ids = []
  
  const addToSavedList = id => {
    if (ids.includes(id) !== true) {
      setSaved([...saved, movieList.find(movie => movie["id"] == id)])
    }
    
    for (let i = 0; i < saved.length; i++) {
      if (i.hasOwnProperty(id) !== true) {
        ids.push(id)
      }
    }

  };

  return (
    <div>
      <SavedList list={saved} />
      
      <Switch>
        <Route path="/movies/:id" movie={movieList}>
          <Movie addToSaved={addToSavedList}/>
        </Route>

        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
      
    </div>

  );
}

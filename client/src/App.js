import React, { useState } from 'react';
import {Route} from "react-router-dom";
import MovieList from "../src/Movies/MovieList";
import Movie from '../src/Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component= {MovieList}/>
        <Route exact path="/movies/:id" component= {Movie}/>
      </div>
    </div>
  );
};

export default App;

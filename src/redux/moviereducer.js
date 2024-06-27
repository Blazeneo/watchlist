import { createSlice } from "@reduxjs/toolkit";

import { movies } from "../moviesData";
import { db } from "../Db";


const initialstate = {movies};


const movieSlice = createSlice({
    name: 'movies',
    initialState:initialstate,
    reducers: {
        addMovie:async (state, action) => {
       state.movies.push(action.payload);
       
      },
      addStars: (state, action) => {
        const movie = state.movies.find(movie => movie.title === action.payload.title);
        if (movie && movie.stars < 5) {
          movie.stars += 0.5;
        }
      },
      revStars: (state, action) => {
        const movie = state.movies.find(movie => movie.title === action.payload.title);
        if (movie && movie.stars > 0) {
          movie.stars -= 0.5;
        }
      },
      watch: (state, action) => {
        const movie = state.movies.find(movie => movie.title === action.payload.title);
        if (movie) {
          movie.watched = !movie.watched;
        }
        
      },
     deleteMovie: (state, action) => {
        const id = state.movies.find(movie => movie.title === action.payload.title);
       
        state.movies = state.movies.filter(movie => movie !== id);
        
      }
    }
  });
  
  
  export const { addStars, revStars, watch, handleCart,addMovie,deleteMovie } = movieSlice.actions;
  
  
  
  export const movieReducer =movieSlice.reducer;

export const movieSelector = state => state.movieReducer.movies;

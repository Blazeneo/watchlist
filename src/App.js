import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Movielist from "./movielist";
import AddMovieForm from "./addMovie";
import { Provider } from 'react-redux';
import {store} from './store'; 

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movielist />} />
          <Route path="/addmovie" element={<AddMovieForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

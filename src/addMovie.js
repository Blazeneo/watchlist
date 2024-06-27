import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../src/redux/moviereducer';

function AddMovieForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [plot, setPlot] = useState('');
  const [year, setYear] = useState(0);

  const [stars, setStars] = useState(0);
  const [watched, setwatched] = useState(false);
  const [poster, setPoster] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create new movie object
    const newMovie = {
      title,
      plot,
      year,
      
      stars,
      watched,
      poster,
    };

    // Dispatch addMovie action
    dispatch(addMovie(newMovie));

    // Reset form fields (if needed)
    setTitle('');
    setPlot('');
    setYear(0);
    
    setStars(0);
    setwatched(false);
    setPoster('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the movie title"
          required
        />
      </div>
      <div>
        <label htmlFor="plot">Plot:</label>
        <textarea
          id="plot"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          placeholder="Enter the movie plot"
          required
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          placeholder="Enter the release year"
          required
        />
      </div>
      <div>
        <label htmlFor="stars">Stars:</label>
        <input
          type="number"
          id="stars"
          value={stars}
          onChange={(e) => setStars(Number(e.target.value))}
          placeholder="Enter the star rating"
          required
        />
      </div>
      <div>
        <label htmlFor="poster">Poster URL:</label>
        <input
          type="text"
          id="poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          placeholder="Enter the URL of the movie poster"
          required
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;

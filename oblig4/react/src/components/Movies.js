import { useState } from 'react';
import { getMovies } from '../utils/movieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  return (
    <>
      {movies?.length > 0 ? <p>{JSON.stringify(movies)}</p> : null};
      <button type="button" onClick={handleClick}>
        Button
      </button>
    </>
  );
};

// const movie = (props) => {};

export default Movies;
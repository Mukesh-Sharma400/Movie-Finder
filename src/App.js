import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./Card";

const API_URL = "http://www.omdbapi.com?apikey=eb3e0575";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="bg-dark pb-5">
      <h1 className="text-center pt-5 mb-3 text-white">Movie Finder</h1>
      <div className="d-flex justify-content-center mb-5">
        <div className="input-group container" style={{ maxWidth: "50rem" }}>
          <input
            type="text"
            className="form-control rounded-start-pill ps-4"
            placeholder="Enter Movie Name Here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span
            className="input-group-text rounded-end-pill search-button"
            onClick={() => searchMovies(searchTerm)}
          >
            <i className="bi bi-search me-2"></i> Search
          </span>
        </div>
      </div>
      <div className="container mx-auto">
        {movies?.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {movies.map((movie) => {
              return <Card movie={movie} key={movie.imdbID} />;
            })}
          </div>
        ) : (
          <div className="my-5 py-5">
            <h1 className="text-center my-5 py-5 text-white">
              No Movies Found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

import { MovieCard } from "./MovieCard";
import { ContentProps } from "../types/interfaces";

export const Content: React.FC<ContentProps> = ({ movies }) => (
  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
);
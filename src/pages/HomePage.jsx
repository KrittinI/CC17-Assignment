import { useContext } from "react";
import Movie from "../components/Movie";
import { MovieListContext } from "../context/MovieListContext";

function HomePage() {
    const { moviesList, handleClickAddList } = useContext(MovieListContext)
    console.log(moviesList);
    return (
        <div>
            <div>MenuBar</div>
            <ul>
                {moviesList.map((movie) => <Movie movie={movie} key={movie.movieId} handleClickAddList={handleClickAddList} />)}
            </ul>
        </div>
    )
}

export default HomePage
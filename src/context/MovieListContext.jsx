import { createContext, useState, useEffect } from "react";
import axios from "axios";
import * as ccAPI from '../apis/ccAPIs/v3'
export const MovieListContext = createContext()

export default function MovieListContextProvider({ children }) {

    const [moviesList, setMoviesList] = useState([])
    const [fevMovieList, setFevMovieList] = useState([])
    const [selectedMovie, setSelectedMovie] = useState([])

    useEffect(() => {
        fetechMovie()
    }, [])

    const handleClickMovie = (id) => {
        console.log("poster", id);
    }

    const handleDelete = async (id) => {
        console.log(id)
    }

    const handleClickAddList = async (id) => {
        const foundIndex = moviesList.findIndex((movie) => movie.movieId === id)
        const newMovie = moviesList[foundIndex]
        // newMovie.noted = inputText
        // console.log(newMovie);
        // setSelectedMovie(moviesList[foundIndex])
        try {
            const response = await axios.post(`https://cc17-assessment-api.onrender.com/v3/movie?userId=3`, newMovie)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

        // setFevMovieList([newMovie, ...fevMovieList])
        // console.log(fevMovieList);
    }

    const fetechMovie = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=32014ba507a1ef99e8eda0c9d038c1c6')
            const data = response.data.results.map((movie) => {
                let obj = {}
                obj.title = "Movie"
                obj.movieName = movie.title || {}
                obj.movieImg = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                obj.movieId = movie.id
                return obj;
            })
            setMoviesList(data)
        } catch (error) {
            console.log(error);
        }
    }



    const sharedData = { moviesList, handleClickAddList, handleClickMovie, fevMovieList, setFevMovieList, handleDelete }

    return <MovieListContext.Provider value={sharedData}>{children}</MovieListContext.Provider>
}
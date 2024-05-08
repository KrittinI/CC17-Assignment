/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MovieListContext } from "../context/MovieListContext";

function Movie(props) {
    const [setInput] = useState('')
    const { handleClickMovie, handleDelete } = useContext(MovieListContext)
    const { movieName, movieImg, movieId } = props.movie



    const handleChangeInput = (e) => {
        setInput(e.target.value)
    }


    return (
        <div>
            <img src={movieImg} onClick={() => handleClickMovie(movieId)} />
            <p>{movieName}</p>
            <button onClick={() => handleDelete(movieId)}>X</button>
        </div>
    )
}

export default Movie
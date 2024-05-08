/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MovieListContext } from "../context/MovieListContext";

function Movie(props) {
    const [input, setInput] = useState('')
    const { handleClickMovie } = useContext(MovieListContext)
    const { handleClickAddList } = props
    const { movieName, movieImg, movieId } = props.movie



    const handleChangeInput = (e) => {
        setInput(e.target.value)
    }


    return (
        <div>
            <img src={movieImg} onClick={() => handleClickMovie(movieId)} />
            <p>{movieName}</p>
            <button onClick={() => handleClickAddList(movieId)}>+ Add to my list</button>
            <input value={input} onChange={handleChangeInput} />
        </div>
    )
}

export default Movie
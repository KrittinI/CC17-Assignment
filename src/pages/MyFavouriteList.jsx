import { useContext, useEffect } from "react"
import { MovieListContext } from "../context/MovieListContext"
import * as ccAPI from '../apis/ccAPIs/v3'
import FavMovie from '../components/FavMovie'

function MyFavouriteList() {
    const { fevMovieList, setFevMovieList } = useContext(MovieListContext)

    useEffect(() => {
        fetchFevMovie()
    }, [])



    const fetchFevMovie = async () => {
        try {
            let response = await ccAPI.getAllMovie()
            console.log(response.data.data);
            setFevMovieList(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <ul>
            {fevMovieList.map((movie) => <FavMovie movie={movie} key={movie.id} />)}
        </ul>
    )
}

export default MyFavouriteList
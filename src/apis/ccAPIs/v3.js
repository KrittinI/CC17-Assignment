import axios from './axios.config'

export const createMovie = async (data) => {
    return await axios.post('/v3/movie?userId=3', data)
}
export const getAllMovie = async () => {
    return await axios.get('/v3/movie?userId=3')
}

export const getMovie = async (id) => {
    return await axios.post(`/v3/movie?userId=${id}`)
}
export const deleteMovie = async (id) => {
    return await axios.post(`/v3/movie?userIdme=${id}`)
}
export const updateMovie = async (id) => {
    return await axios.post(`/v3/movie?userIdme=${id}`)
}


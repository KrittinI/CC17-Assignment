import axios from './axios.config'

export const register = async (data) => {
    return await axios.post('/auth/register', data)
}
export const login = async (data) => {
    return await axios.post('/auth/login', data)
}

export const getme = async (id) => {
    return await axios.post(`/auth/me?userId=${id}`)
}
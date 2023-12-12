import axios from 'axios'

export const login = (data) => {
    axios.post('http://localhost:8000/api/sistema/login',data)
    .then(resp => {
        localStorage.setItem('token', resp.token)
    })
}
export const register = (data) => {
    axios.post('http://localhost:8000/api/sistema/register', data)
    .then(resp => {
        localStorage.setItem('token', resp.token)
    })
}
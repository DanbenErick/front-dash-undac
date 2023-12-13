import axios from 'axios'
/**
 * API Auth
 */
export const login = (data) => {
     axios.post('http://localhost:8000/api/sistema/login', data)
          .then((resp) => {
               console.log(resp)
               localStorage.setItem('token', resp.data.token)
               localStorage.setItem('id', resp.data.id)
               localStorage.setItem('nombre', resp.data.name)
               containerSpinner.style.display = 'none'
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}
export const register = (data) => {
     axios.post('http://localhost:8000/api/sistema/register', data)
          .then((resp) => {
               localStorage.setItem('token', resp.data.token)
               localStorage.setItem('id', resp.data.id)
               localStorage.setItem('nombre', resp.data.name)
               containerSpinner.style.display = 'none'
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}

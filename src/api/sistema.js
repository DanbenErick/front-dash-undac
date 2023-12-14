import axios from 'axios'
import { API_ADMINISTRADOR, API_ESTUDIANTE, API_SISTEMA, API_URL } from '../env.js'
/**
 * API Auth
 */
export const login = (data) => {
     axios.post(`${API_URL}${API_SISTEMA}/login`, data)
          .then((resp) => {
               console.log(resp)
               localStorage.setItem('token', resp.data.token)
               localStorage.setItem('id', resp.data.id)
               localStorage.setItem('nombre', resp.data.name)
               localStorage.setItem('fecha-expiracion', resp.data.fecha_expiracion)
               location.reload()
               containerSpinner.style.display = 'none'
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}
export const register = (data) => {
     axios.post(
          `${API_URL}${API_SISTEMA}/register`,
          data
     )
          .then((resp) => {
               localStorage.setItem('token', resp.data.token)
               localStorage.setItem('id', resp.data.id)
               localStorage.setItem('nombre', resp.data.name)
               location.reload()
               containerSpinner.style.display = 'none'
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}

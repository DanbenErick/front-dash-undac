import axios from 'axios'
import { config } from 'dotenv-webpack'
config()
/**
 * API Auth
 */
export const login = (data) => {
     axios.post(`${process.env.API_URL}${process.env.API_SISTEMA}/login`, data)
          .then((resp) => {
               console.log(resp)
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
export const register = (data) => {
     axios.post(
          `${process.env.API_URL}${process.env.API_SISTEMA}/register`,
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

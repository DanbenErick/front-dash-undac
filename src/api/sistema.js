import axios from 'axios'
import Swal from 'sweetalert2'
import { API_ADMINISTRADOR, API_ESTUDIANTE, API_SISTEMA, API_URL } from '../env.js'
/**
 * API Auth
 */
export const login = (data) => {
     const url =`${API_URL}${API_SISTEMA}/login`
     console.log(url) 
     axios.post(url, data)
          .then((resp) => {
               if(!resp.data.ok) {
                    Swal.fire({
                         title: "UNDAC",
                         text: "No se encontro usuario o contraseña incorrecta",
                         icon: 'error'
                    })
                    containerSpinner.style.display = 'none'
                    return 
               }
               localStorage.setItem('token', resp.data.token)
               localStorage.setItem('id', resp.data.id)
               localStorage.setItem('nombre', resp.data.name)
               localStorage.setItem('fecha-expiracion', resp.data.fecha_expiracion)
               location.reload()
               containerSpinner.style.display = 'none'
          })
          .catch((err) => {
               Swal.fire({
                    title: "UNDAC",
                    text: "No se encontro usuario o contraseña incorrecta",
                    icon: 'error'
               })
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
               // console.log(err)
               containerSpinner.style.display = 'none'
          })
}

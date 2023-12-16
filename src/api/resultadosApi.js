import axios from 'axios'
import { API_ADMINISTRADOR, API_ESTUDIANTE, API_SISTEMA, API_URL } from '../env.js'
const tokenLocalStorage = localStorage.getItem('token')
const axiosConfig = {
     headers: {
       'Authorization': `Bearer ${tokenLocalStorage}`,
       'Content-Type': 'multipart/form-data',
     },
};

export const registrarSolapaPrincipal = (data, callback) => {
     axios.post(
          `${API_URL}${API_ADMINISTRADOR}/registrar-solapa-principal`,
          data,
          axiosConfig
     )
          .then((resp) => {
               callback(resp)
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}

export const registrarSolapaSecundaria = (data, callback) => {
     axios.post(
          `${API_URL}${API_ADMINISTRADOR}/registrar-solapa-secundario`,
          data,
          axiosConfig
     )
          .then((resp) => {
               callback(resp)
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}
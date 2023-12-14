import axios from 'axios'
import { API_ADMINISTRADOR, API_ESTUDIANTE, API_SISTEMA, API_URL } from '../env.js'
const tokenLocalStorage = localStorage.getItem('token')
const axiosConfig = {
     headers: {
       'Authorization': `Bearer ${tokenLocalStorage}`,
       'Content-Type': 'application/json', // Puedes ajustar el tipo de contenido según tus necesidades
     },
};
/**
 * API ADMINISTRADOR
 */
export const getDataEstudianteFromDNI = (data, callback) => {
     axios.post(
          `${API_URL}${API_ADMINISTRADOR}/get-data-from-dni-estudiante`,
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
export const getVouchers = (callback) => {
     axios.get(
          `${API_URL}${API_ADMINISTRADOR}/get-vouchers`,
          axiosConfig
     )
          .then((resp) => {
               console.log(resp.data)
               callback(resp)
               containerSpinner.style.display = 'none'
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}
export const getProcesos = (callback) => {
     axios.get(
          `${API_URL}${API_ADMINISTRADOR}/get-procesos`,
          axiosConfig
     )
          .then((resp) => {
               console.log(resp.data)
               callback(resp)
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}

export const guardarVoucher = (data, callback) => {
     axios.post(
          `${API_URL}${API_ADMINISTRADOR}/set-voucher`,
          data,
          axiosConfig
     )
          .then((resp) => {
               console.log(resp.data)
               callback(resp)
          })
          .catch((err) => {
               console.error(err)
               containerSpinner.style.display = 'none'
          })
}

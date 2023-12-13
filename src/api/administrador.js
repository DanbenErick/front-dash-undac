import axios from 'axios'
import { config } from 'dotenv-webpack'
config()
/**
 * API ADMINISTRADOR
 */
export const getDataEstudianteFromDNI = (data, callback) => {
     axios.post(
          `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/get-data-from-dni-estudiante`,
          data
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
          `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/get-vouchers`
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
          `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/get-procesos`
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
          `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/set-voucher`,
          data
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

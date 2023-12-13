import axios from 'axios'
/**
 * API SISTEMA
 */
export const getDataEstudianteFromDNI = (data, callback) => {
     axios.post(
          'http://localhost:8000/api/administrador/get-data-from-dni-estudiante',
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
export const getVouchers = (callback) => {
     axios.get('http://localhost:8000/api/administrador/get-vouchers')
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
     axios.get('http://localhost:8000/api/administrador/get-procesos').then(
          (resp) => {
               console.log(resp.data)
               callback(resp)
          }
     )
}

export const guardarVoucher = (data, callback) => {
     axios.post(
          'http://localhost:8000/api/administrador/set-voucher',
          data
     ).then((resp) => {
          console.log(resp.data)
          callback(resp)
     })
}

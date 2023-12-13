import {
     getVouchers,
     getProcesos,
     getDataEstudianteFromDNI,
     guardarVoucher
} from './api/administrador'
import Swal from 'sweetalert2'
import { validarFormulario } from './util/util'
const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 6000,
     timerProgressBar: true,
     didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
     }
})

const setDataInTableVouchers = () => {
     containerSpinner.style.display = 'flex'
     getVouchers((response) => {
          // Presenta los datos en una tabla
          const table = document.querySelector('table tbody')
          table.innerHTML = ''
          for (const item of response.data) {
               const row = document.createElement('tr')

               const idCell = document.createElement('td')
               const idText = document.createTextNode(item.id)
               idCell.appendChild(idText)
               row.appendChild(idCell)

               const codigoCell = document.createElement('td')
               const codigoText = document.createTextNode(item.codigo)
               codigoCell.appendChild(codigoText)
               row.appendChild(codigoCell)

               // Repite el proceso para estado y fecha
               const dniCell = document.createElement('td')
               const dniText = document.createTextNode(item.dni)
               dniCell.appendChild(dniText)
               row.appendChild(dniCell)

               const fechaCell = document.createElement('td')
               const fechaText = document.createTextNode(item.fecha)
               fechaCell.appendChild(fechaText)
               row.appendChild(fechaCell)

               const nombreCell = document.createElement('td')
               const nombreText = document.createTextNode(item.nombre)
               nombreCell.appendChild(nombreText)
               row.appendChild(nombreCell)

               const procesoCell = document.createElement('td')
               const procesoText = document.createTextNode(item.proceso)
               procesoCell.appendChild(procesoText)
               row.appendChild(procesoCell)

               const montoCell = document.createElement('td')
               const montoText = document.createTextNode('S/ ' + item.monto)
               montoCell.appendChild(montoText)
               row.appendChild(montoCell)

               // Repite el proceso para estado y fecha

               table.appendChild(row)
          }
          containerSpinner.style.display = 'none'
     })
     getProcesos((resp) => {
          const procesosAbiertos = resp.data.filter(
               (obj) => obj.estado == 'abierto'
          )
          // Llenar las opciones dinámicamente
          procesosAbiertos.forEach(function (data) {
               const option = document.createElement('option')
               option.value = data.nombre
               option.text = data.nombre
               selectTipoVoucherFormVoucher.add(option)
          })
     })
}

const searchEstudianteFromDNI = () => {
     containerSpinner.style.display = 'flex'
     getDataEstudianteFromDNI({ dni: inputDNIFormVoucher.value }, (resp) => {
          if (resp.data.length == 0) {
               Toast.fire({
                    icon: 'error',
                    title: 'No se encontro estudiante con ese DNI'
               })
          } else {
               const nombre_completo = `${resp.data[0].nombres} ${resp.data[0].apellido_p} ${resp.data[0].apellido_m}`
               inputNombreCompletoFormVoucher.value = nombre_completo
               Toast.fire({
                    icon: 'success',
                    title: 'Se encontro estudiante con ese DNI'
               })
          }
          containerSpinner.style.display = 'none'
     })
}

const setVoucher = (_) => {
     if(!validarFormulario('formGuardarVoucher')['ok']) {
        Toast.fire({
            icon: 'warning',
            title: 'Rellena todos los datos requeridos'
       })
       return;
     }
     Swal.fire({
          title: 'Voucher?',
          text: 'Desear guardar el voucher?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, deseo guardar'
     }).then((result) => {
          if (result.isConfirmed) {
               containerSpinner.style.display = 'flex'
               const tipoVoucher = selectTipoVoucherFormVoucher.value
               const fecha = inputFechaFormVoucher.value
               const nombreCompleto = inputNombreCompletoFormVoucher.value
               const dni = inputDNIFormVoucher.value
               const monto = inputMontoFormVoucher.value
               const codigo = inputCodigoFormVoucher.value
               const data = {
                    tipoVoucher,
                    fecha,
                    nombreCompleto,
                    dni,
                    monto,
                    codigo
               }
               guardarVoucher(data, (resp) => {
                    if (resp.data.affectedRows) {
                         Toast.fire({
                              icon: 'success',
                              title: 'Se guardo correctamente el voucher'
                         })
                         setDataInTableVouchers()
                    } else {
                         Toast.fire({
                              icon: 'error',
                              title: 'Ocurrio un error'
                         })
                    }
               })

               containerSpinner.style.display = 'none'
          }
     })
}

document.addEventListener('DOMContentLoaded', () => {
     if (window.location.pathname.includes('voucher.html')) {
          btnRefreshTableVoucher.addEventListener(
               'click',
               setDataInTableVouchers
          )
          btnBuscarEstudianteFromDNI.addEventListener(
               'click',
               searchEstudianteFromDNI
          )
          btnGuadarVoucherFormVoucher.addEventListener('click', setVoucher)
          setDataInTableVouchers()
     }
})

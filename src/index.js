import Swal from 'sweetalert2'
import axios from 'axios'
import {
     getSedes,
     getDepartamentosForSelect,
     getDiscapacidades,
     getDistritoForSelect,
     getProvinciaForSelect,
     getUbigeo,
     getEtnicas,
     getProcesos,
     getProgramasEstudio,
     setDatosComplementarios
} from './estudiantes.js'

import './login.js'
import './register.js'
import './voucher.js'
import './cerrar-sesion.js'

import { config } from 'dotenv-webpack'
config()

// import 'datatables.net/css/jquery.dataTables.css';
// btnCrearProceso.addEventListener('click', abrirModal)
// Función para mostrar los datos en una tablaa

document.addEventListener('DOMContentLoaded', () => {
     if (window.location.pathname.includes('estudiantes.html')) {
          getDepartamentosForSelect()
          getDiscapacidades()
          getEtnicas()
          getProcesos()
          getSedes()
          getProgramasEstudio()

          selectDepartamentoEstudiante.addEventListener('change', () => {
               getProvinciaForSelect(selectDepartamentoEstudiante.value)
          })
          selectProvinciaEstudiante.addEventListener('change', () => {
               getDistritoForSelect(
                    selectDepartamentoEstudiante.value,
                    selectProvinciaEstudiante.value
               )
          })
          selectDistritoEstudiante.addEventListener('change', () => {
               getUbigeo(
                    selectDepartamentoEstudiante.value,
                    selectProvinciaEstudiante.value,
                    selectDistritoEstudiante.value
               )
          })
     }

     // guardarDatosComplementarias.addEventListener("click", () => {
     //   const data = {
     //     apellidosNombres: apellidosNombres.value,
     //     celularApoderado: celularApoderado.value,
     //     dniApoderado: dniApoderado.value,
     //     selectModalidad: selectModalidad.value,
     //     anioConclusion: anioConclusion.value,
     //     tipoColegio: tipoColegio.value,
     //     nombreColegio: nombreColegio.value,
     //     selectSedeExamen: selectSedeExamen.value,
     //     selectProgramaEstudio: selectProgramaEstudio.value,
     //     genero: genero.value,
     //     fechaNacimiento: fechaNacimiento.value,
     //     inputUbigeo: inputUbigeo.value,
     //     selectDepartamentoEstudiante: selectDepartamentoEstudiante.value,
     //     selectProvinciaEstudiante: selectProvinciaEstudiante.value,
     //     selectDistritoEstudiante: selectDistritoEstudiante.value,
     //     direccionActual: direccionActual.value,
     //     discapacidad: discapacidad.value,
     //     tipoDiscapacidad: tipoDiscapacidad.value,
     //     identidadEtnica: identidadEtnica.value,
     //     celular: celular.value,
     //     telefonoFijo: telefonoFijo.value,
     //     foto: foto.value,
     //   };
     //   setDatosComplementarios(data);
     // });

     if (window.location.pathname.includes('procesos.html')) {          
          axios.get(`${process.env.API_URL}${process.env.API_ADMINISTRADOR}/get-procesos`)
               .then((response) => {
                    console.log(response.data)
                    // Presenta los datos en una tabla
                    const table = document.querySelector('table tbody')

                    for (const item of response.data) {
                         const row = document.createElement('tr')

                         const idCell = document.createElement('td')
                         const idText = document.createTextNode(item.id)
                         idCell.appendChild(idText)
                         row.appendChild(idCell)

                         const nombreCell = document.createElement('td')
                         const nombreText = document.createTextNode(item.nombre)
                         nombreCell.appendChild(nombreText)
                         row.appendChild(nombreCell)

                         // Repite el proceso para estado y fecha
                         const estadoCell = document.createElement('td')
                         const estadoText = document.createTextNode(item.estado)
                         estadoCell.appendChild(estadoText)
                         row.appendChild(estadoCell)

                         const fechaCell = document.createElement('td')
                         const fechaText = document.createTextNode(item.nombre)
                         fechaCell.appendChild(fechaText)
                         row.appendChild(fechaCell)

                         // Repite el proceso para estado y fecha

                         table.appendChild(row)
                    }
               })
               .catch((error) => {
                    console.error('Error en la petición:', error)
               })

          btnGuardarNuevoProceso.addEventListener('click', () => {
               const nombre = document.querySelector(
                    '#formCrearProceso .nombre'
               )
               const estado = document.querySelector(
                    '#formCrearProceso .estado'
               )
               const fecha = document.querySelector('#formCrearProceso .fecha')
               const data = {
                    nombre: nombre.value,
                    estado: estado.value,
                    fecha: fecha.value
               }
               // Realizar la petición POST con Axios
               axios.post(
                    `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/crear-proceso`,
                    data
               )
                    .then((response) => {
                         // Manejar la respuesta del servidor
                         console.log('Respuesta del servidor:', response.data)
                         if (response.data.affectedRows) {
                              Swal.fire({
                                   title: 'Correcto!',
                                   text: 'Se registro correctamente',
                                   icon: 'success',
                                   confirmButtonText: 'Ok'
                              })
                              nombre.value = ''
                              estado.value = ''
                              fecha.value = ''
                              btnCloseModalProceso.click()
                              location.reload()
                         }
                    })
                    .catch((error) => {
                         // Manejar errores de la petición
                         console.error('Error en la petición:', error)
                    })
          })
     }
})

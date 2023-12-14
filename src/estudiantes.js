import axios from 'axios'
import { API_ADMINISTRADOR, API_ESTUDIANTE, API_SISTEMA, API_URL } from './env.js'
import Swal from 'sweetalert2';
const tokenLocalStorage = localStorage.getItem('token')
const axiosConfig = {
     headers: {
          'Authorization': `Bearer ${tokenLocalStorage}`
     },
};

const guardatCambiosEditadosEstudiante = (data, callback) => {
     axios.post(`${API_URL}${API_ADMINISTRADOR}/editar-datos-postulante`, data, axiosConfig)
          .then(resp => {
               if (resp.data.ok) {
                    Swal.fire({
                         title: "UNDAC",
                         text: "Se guardo correctamente los datos",
                         icon: 'success'
                    })
                    formModalEditarEstudiante.reset()
               }
          })
          .error(err => {
               Swal.fire({
                    title: "UNDAC",
                    text: "Ocurrio un error",
                    icon: 'error'
               })
               console.error(err)
          })
}
const setDatosComplementarios = (data) => {
     axios.post(
          `${API_URL}${API_ADMINISTRADOR}/registrar-datos-postulante`,
          data,
          {
               headers: {
                    'Authorization': `Bearer ${tokenLocalStorage}`,
                    'Content-Type': 'multipart/form-data', // Puedes ajustar el tipo de contenido según tus necesidades
               },
          }
     )
          .then((resp) => {
               if (resp.data.ok) {
                    Swal.fire({
                         title: "UNDAC",
                         text: "Se guardo correctamente los datos",
                         icon: 'success'
                    })
               }
          })
          .catch((err) => {
               Swal.fire({
                    title: "UNDAC",
                    text: "Ocurrio un error",
                    icon: 'error'
               })
               console.error(err)
          })
}

const getSedes = () => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-sedes`,
          axiosConfig
     ).then((resp) => {
          console.log(resp.data)

          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.sede
               option.text = data.sede
               sedeExamenModalEditarEstudiante.add(option)
          })
          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.sede
               option.text = data.sede
               selectSedeExamen.add(option)
               
          })
     })
}

const getDatosEstudiantesModal = () => {
     const table = document.querySelector('#tableModalTodosEstudiantes tbody')
     table.innerHTML = ""
     axios.get(`${API_URL}${API_ADMINISTRADOR}/get-estudiantes-incritos-examen`, axiosConfig)
     .then(response => {
          
     
          for (const item of response.data) {
               const row = document.createElement('tr')
     
               const idCell = document.createElement('td')
               const idText = document.createTextNode(item.dni)
               idCell.appendChild(idText)
               row.appendChild(idCell)
     
               const nombreCell = document.createElement('td')
               const nombreText = document.createTextNode(`${item.apellido_p} ${item.apellido_m} ${item.nombres}` )
               nombreCell.appendChild(nombreText)
               row.appendChild(nombreCell)
     
               // Repite el proceso para estado y fecha
               const estadoCell = document.createElement('td')
               const estadoText = document.createTextNode(item.modalidad)
               estadoCell.appendChild(estadoText)
               row.appendChild(estadoCell)
     
               const fechaCell = document.createElement('td')
               const fechaText = document.createTextNode(item.area2)
               fechaCell.appendChild(fechaText)
               row.appendChild(fechaCell)

               const sedeCell = document.createElement('td')
               const sedeText = document.createTextNode(item.sede_e)
               sedeCell.appendChild(sedeText)
               row.appendChild(sedeCell)
     
               // Repite el proceso para estado y fecha
     
               table.appendChild(row)
          }
          containerSpinner.style.display = "none"
     })
     .catch(err => {
          console.log(err)
          containerSpinner.style.display = "none"
     })
     
}

const getProgramasEstudio = () => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-programas-estudio`,
          axiosConfig
     ).then((resp) => {
          console.log(resp.data)

          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.id
               option.text = data.nombre
               programaEstudioModalEditarEstudiante.add(option)
          })
          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.id
               option.text = data.nombre
               selectProgramaEstudio.add(option)
          })
     })
}
const getProcesos = () => {
     axios.get(
          `${API_URL}${API_ADMINISTRADOR}/get-procesos`,
          axiosConfig
     ).then((resp) => {
          console.log(resp.data)
          const procesosAbiertos = resp.data.filter(
               (obj) => obj.estado == 'abierto'
          )
          // Llenar las opciones dinámicamente
          procesosAbiertos.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.nombre
               option.text = data.nombre
               selectModalidad.add(option)
          })
     })
}

const getDiscapacidades = () => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-discapacidades`,
          axiosConfig
     )
          .then((resp) => {
               console.log(resp.data)

               // Llenar las opciones dinámicamente
               resp.data.forEach(function (data) {
                    var option = document.createElement('option')
                    option.value = data.discapacidad
                    option.text = data.discapacidad
                    tipoDiscapacidad.add(option)
               })
          })
          .catch((err) => console.error(err))
}

const getEtnicas = () => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-etnicas`,
          axiosConfig
     )
          .then((resp) => {
               console.log(resp.data)

               // Llenar las opciones dinámicamente
               resp.data.forEach(function (data) {
                    var option = document.createElement('option')
                    option.value = data.etnia
                    option.text = data.etnia
                    identidadEtnica.add(option)
               })
          })
          .catch((err) => console.error(err))
}

const getDepartamentosForSelect = () => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-departamentos`,
          axiosConfig
     )
          .then((resp) => {
               console.log(resp.data)

               // Llenar las opciones dinámicamente
               resp.data.forEach(function (data) {
                    var option = document.createElement('option')
                    option.value = data.Departamento
                    option.text = data.Departamento
                    selectDepartamentoEstudiante.add(option)
               })
          })
          .catch((err) => console.error(err))
}
const getProvinciaForSelect = (departamento) => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-provincias?departamento=${departamento}`,
          axiosConfig
     ).then((resp) => {
          // Llenar las opciones dinámicamente
          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.Provincia
               option.text = data.Provincia
               selectProvinciaEstudiante.add(option)
          })
     })
}
const getDistritoForSelect = (departamento, provincia) => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-distritos?departamento=${departamento}&provincia=${provincia}`,
          axiosConfig
     ).then((resp) => {
          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.Distrito
               option.text = data.Distrito
               selectDistritoEstudiante.add(option)
          })
     })
}

const getUbigeo = (departamento, provincia, distrito) => {
     axios.get(
          `${API_URL}${API_ESTUDIANTE}/get-ubigeo?departamento=${departamento}&provincia=${provincia}&distrito=${distrito}`,
          axiosConfig
     ).then((resp) => {
          inputUbigeo.value = resp.data[0].ubigeo
     })
}
export {
     getProgramasEstudio,
     getDepartamentosForSelect,
     getDistritoForSelect,
     getProvinciaForSelect,
     getUbigeo,
     getDiscapacidades,
     getEtnicas,
     getProcesos,
     getSedes,
     setDatosComplementarios,
     guardatCambiosEditadosEstudiante,
     getDatosEstudiantesModal
}

import axios from 'axios'
import { config } from 'dotenv-webpack'
config()
const setDatosComplementarios = (data) => {
     axios.post(
          `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/registrar-datos-postulante`,
          data
     )
          .then((resp) => {})
          .catch((err) => {})
}

const getSedes = () => {
     axios.get(
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-sedes`
     ).then((resp) => {
          console.log(resp.data)

          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.sede
               option.text = data.sede
               selectSedeExamen.add(option)
          })
     })
}

const getProgramasEstudio = () => {
     axios.get(
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-programas-estudio`
     ).then((resp) => {
          console.log(resp.data)

          resp.data.forEach(function (data) {
               var option = document.createElement('option')
               option.value = data.nombre
               option.text = data.nombre
               selectProgramaEstudio.add(option)
          })
     })
}
const getProcesos = () => {
     axios.get(
          `${process.env.API_URL}${process.env.API_ADMINISTRADOR}/get-procesos`
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
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-discapacidades`
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
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-etnicas`
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
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-departamentos`
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
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-provincias?departamento=${departamento}`
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
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-distritos?departamento=${departamento}&provincia=${provincia}`
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
          `${process.env.API_URL}${process.env.API_ESTUDIANTE}/get-ubigeo?departamento=${departamento}&provincia=${provincia}&distrito=${distrito}`
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
     setDatosComplementarios
}

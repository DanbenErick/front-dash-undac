import axios from 'axios'








const setDatosComplementarios = (data) => {
    axios.post('http://localhost:8000/api/estudiantes/registrar-datos-postulante', data)
}

const getSedes = () => {
    
    axios.get('http://localhost:8000/api/estudiantes/get-sedes')
    .then(resp => {
        console.log(resp.data)
        
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.sede
            option.text = data.sede;
            selectSedeExamen.add(option);
        });
    })
}

const getProgramasEstudio = () => {
    
    axios.get('http://localhost:8000/api/estudiantes/get-programas-estudio')
    .then(resp => {
        console.log(resp.data)
        
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.nombre
            option.text = data.nombre;
            selectProgramaEstudio.add(option);
        });
    })
}
const getProcesos = () => {
    axios.get('http://localhost:8000/api/administrador/get-procesos')
    .then(resp => {
        console.log(resp.data)
        const procesosAbiertos = resp.data.filter(obj => obj.estado == 'abierto')
        // Llenar las opciones dinámicamente
        procesosAbiertos.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.nombre
            option.text = data.nombre;
            selectModalidad.add(option);
        });
    })
}

const getDiscapacidades = () => {
    axios.get('http://localhost:8000/api/estudiantes/get-discapacidades')
    .then(resp => {
        console.log(resp.data)

        // Llenar las opciones dinámicamente
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.discapacidad
            option.text = data.discapacidad;
            tipoDiscapacidad.add(option);
        });
    })
    .catch(err => console.error(err))
}

const getEtnicas = () => {
    axios.get('http://localhost:8000/api/estudiantes/get-etnicas')
    .then(resp => {
        console.log(resp.data)

        // Llenar las opciones dinámicamente
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.etnia
            option.text = data.etnia;
            identidadEtnica.add(option);
        });
    })
    .catch(err => console.error(err))
}

const getDepartamentosForSelect = () => {
    axios.get('http://localhost:8000/api/estudiantes/get-departamentos')
    .then(resp => {
        console.log(resp.data)

        // Llenar las opciones dinámicamente
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.Departamento
            option.text = data.Departamento;
            selectDepartamentoEstudiante.add(option);
        });
    })
    .catch(err => console.error(err))
}
const getProvinciaForSelect = (departamento) => {
    axios.get(`http://localhost:8000/api/estudiantes/get-provincias?departamento=${departamento}`)
    .then(resp => {
        // Llenar las opciones dinámicamente
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.Provincia
            option.text = data.Provincia;
            selectProvinciaEstudiante.add(option);
        });
    })
}
const getDistritoForSelect = (departamento, provincia) => {
    axios.get(`http://localhost:8000/api/estudiantes/get-distritos?departamento=${departamento}&provincia=${provincia}`)
    .then(resp => {
        resp.data.forEach(function(data) {
            var option = document.createElement("option");
            option.value = data.Distrito
            option.text = data.Distrito;
            selectDistritoEstudiante.add(option);
        });
    })
}

const getUbigeo = (departamento, provincia, distrito) => {
    axios.get(`http://localhost:8000/api/estudiantes/get-ubigeo?departamento=${departamento}&provincia=${provincia}&distrito=${distrito}`)
    .then(resp => {
        inputUbigeo.value = resp.data[0].ubigeo
    })
}
export { getProgramasEstudio, getDepartamentosForSelect, getDistritoForSelect, getProvinciaForSelect, getUbigeo, getDiscapacidades, getEtnicas, getProcesos, getSedes, setDatosComplementarios }



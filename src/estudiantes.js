import axios from 'axios'


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
export { getDepartamentosForSelect, getDistritoForSelect, getProvinciaForSelect, getUbigeo }



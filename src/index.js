import Swal from 'sweetalert2'
import axios from 'axios'
import { getDepartamentosForSelect,  getDistritoForSelect,  getProvinciaForSelect, getUbigeo } from './estudiantes.js'


// import 'datatables.net/css/jquery.dataTables.css';
// btnCrearProceso.addEventListener('click', abrirModal)
// Función para mostrar los datos en una tablaa

document.addEventListener('DOMContentLoaded', () => {
  if(window.location.pathname.includes('estudiantes.html')) {
    getDepartamentosForSelect()
    
    selectDepartamentoEstudiante.addEventListener("change", () => {
        getProvinciaForSelect(selectDepartamentoEstudiante.value)
    })
    selectProvinciaEstudiante.addEventListener("change", () => {
        getDistritoForSelect(selectDepartamentoEstudiante.value, selectProvinciaEstudiante.value)
    })
    selectDistritoEstudiante.addEventListener("change", () => {
      getUbigeo(selectDepartamentoEstudiante.value, selectProvinciaEstudiante.value, selectDistritoEstudiante.value)
    })
  }
  if(window.location.pathname.includes('procesos.html')) {
    axios.get('http://localhost:8000/api/administrador/get-procesos')
.then(response => {
    console.log(response.data)
    // Presenta los datos en una tabla
    const table = document.querySelector("table tbody");

    for (const item of response.data) {
        const row = document.createElement("tr");
      
        const idCell = document.createElement("td");
        const idText = document.createTextNode(item.id);
        idCell.appendChild(idText);
        row.appendChild(idCell);
      
        const nombreCell = document.createElement("td");
        const nombreText = document.createTextNode(item.nombre);
        nombreCell.appendChild(nombreText);
        row.appendChild(nombreCell);
      
        // Repite el proceso para estado y fecha
        const estadoCell = document.createElement("td");
        const estadoText = document.createTextNode(item.id);
        estadoCell.appendChild(estadoText);
        row.appendChild(estadoCell);
      
        const fechaCell = document.createElement("td");
        const fechaText = document.createTextNode(item.nombre);
        fechaCell.appendChild(fechaText);
        row.appendChild(fechaCell);
      
        // Repite el proceso para estado y fecha
      
        table.appendChild(row);
      }
})
.catch(error => {
    console.error('Error en la petición:', error);
})

btnGuardarNuevoProceso.addEventListener('click', () => {
    const nombre = document.querySelector('#formCrearProceso .nombre')
    const estado = document.querySelector('#formCrearProceso .estado')
    const fecha = document.querySelector('#formCrearProceso .fecha')
    const data = { nombre: nombre.value, estado: estado.value, fecha: fecha.value }
    // Realizar la petición POST con Axios
    axios.post('http://localhost:8000/api/administrador/crear-proceso', data)
      .then(response => {
        // Manejar la respuesta del servidor
        console.log('Respuesta del servidor:', response.data);
        if(response.data.affectedRows){
            Swal.fire({
                title: 'Correcto!',
                text: 'Se registro correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            nombre.value = ""
            estado.value = ""
            fecha.value = ""
            btnCloseModalProceso.click()
        }
      })
      .catch(error => {
        // Manejar errores de la petición
        console.error('Error en la petición:', error);
      });
})
  }
})
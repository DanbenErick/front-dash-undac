import './js-public/bootstrap.min.js'
import './js-public/font-awesome.js'
// import './js-public/popper.min.js'



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
     setDatosComplementarios,
     guardatCambiosEditadosEstudiante,
     getDatosEstudiantesModal
} from './estudiantes.js'
import './login.js'
import './register.js'
import './voucher.js'
import './cerrar-sesion.js'
import './verificar-no-token.js'
import './verificar.js'
import './resultados.js'
import { cerrarSesionEvent } from './cerrar-sesion.js'
import { API_ADMINISTRADOR, API_ESTUDIANTE, API_SISTEMA, API_URL } from './env.js'
import { getDataEstudianteFromDNI } from './api/administrador.js'

axios.interceptors.response.use(
     (response) => {
       // Si la respuesta es exitosa, simplemente la devolvemos
       return response;
     },
     (error) => {
       // Si hay un error en la respuesta
       if (error.response.status === 403) {
         // Aquí puedes realizar acciones específicas para el código de estado 403
         Swal.fire({
          title: "UNDAC?",
          text: "Su sesion vencio!",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Listo"
        }).then((result) => {
          if (result.isConfirmed) {
               cerrarSesionEvent()
               location.reload()
          }
        })
        .catch(err => {
               cerrarSesionEvent()
               location.reload()
        })
         
         // Puedes redirigir a una página de error, mostrar un mensaje, etc.
       }
       // Devolvemos el error para que sea manejado en la cadena de promesas
       return Promise.reject(error);
     }
   );


const tokenLocalStorage = localStorage.getItem('token')
const axiosConfig = {
     headers: {
       'Authorization': `Bearer ${tokenLocalStorage}`,
       'Content-Type': 'application/json', // Puedes ajustar el tipo de contenido según tus necesidades
     },
};
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
          getDatosEstudiantesModal()


          btnSearchEstudianteForDNIFormEstudiantes.addEventListener('click', () => {
               const dni = dniEstudianteFormEstudiante.value
               searchEstudianteFromDNI(dni)
          })

          btnRefreshDataModalEstudiantes.addEventListener('click', () => {
               
               containerSpinner.style.display = "flex"
               getDatosEstudiantesModal()
          })





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

          btnGuardarCambiosEstudianteModalEditarEstudiante.addEventListener('click', () => {
               const data = {
                    dni: inputNumeroDNIModalEditarEstudiante.value,
                    ap_paterno: apellidoPaternoModalEditarEstudiante.value,
                    ap_materno: apellidoMaternoModalEditarEstudiante.value,
                    nombres: nombresModalEditarEstudiante.value,
                    programa: programaEstudioModalEditarEstudiante.value,
                    area: areaModalEditarEstudiante.value,
                    sede: sedeExamenModalEditarEstudiante.value,
                    preparatoria: preparatoriaModalEditarEstudiante.value,
               }
               guardatCambiosEditadosEstudiante(data)
          })

          btnBuscarDatosEstudianteModalEditarEstudiante.addEventListener('click', () => {
               const dni = inputNumeroDNIModalEditarEstudiante.value
               getDataEstudianteFromDNI({ dni }, (resp) => {
                    if (resp.data.length == 0) {
                         Toast.fire({
                              icon: 'error',
                              title: 'No se encontro estudiante con ese DNI'
                         })
                    } else {
                         const nombre_completo = `${resp.data[0].nombres} ${resp.data[0].apellido_p} ${resp.data[0].apellido_m}`
                         
                         apellidoPaternoModalEditarEstudiante. value = resp.data[0].apellido_p
                         apellidoMaternoModalEditarEstudiante. value = resp.data[0].apellido_m
                         nombresModalEditarEstudiante. value = resp.data[0].nombres
                         programaEstudioModalEditarEstudiante. value = resp.data[0].carrera
                         areaModalEditarEstudiante. value = resp.data[0].area2
                         sedeExamenModalEditarEstudiante. value = resp.data[0].sede_e
                         preparatoriaModalEditarEstudiante. value = resp.data[0].preparatoria
                         Toast.fire({
                              icon: 'success',
                              title: 'Se encontro estudiante con ese DNI'
                         })
                    }
                    containerSpinner.style.display = 'none'
               })
          })
          guardarDatosComplementarias.addEventListener("click", () => {
               const formData = new FormData()
               formData.append("dniEstudiante", dniEstudianteFormEstudiante.value)
               formData.append("apellidosNombres", apellidosNombres.value)
               formData.append("celularApoderado", celularApoderado.value)
               formData.append("dniApoderado", dniApoderado.value)
               formData.append("selectModalidad", selectModalidad.value)
               formData.append("anioConclusion", anioConclusion.value)
               formData.append("tipoColegio", tipoColegio.value)
               formData.append("nombreColegio", nombreColegio.value)
               formData.append("selectSedeExamen", selectSedeExamen.value)
               formData.append("selectProgramaEstudio", selectProgramaEstudio.value)
               formData.append("genero", genero.value)
               formData.append("fechaNacimiento", fechaNacimiento.value)
               formData.append("inputUbigeo", inputUbigeo.value)
               formData.append("selectDepartamentoEstudiante", selectDepartamentoEstudiante.value)
               formData.append("selectProvinciaEstudiante", selectProvinciaEstudiante.value)
               formData.append("selectDistritoEstudiante", selectDistritoEstudiante.value)
               formData.append("direccionActual", direccionActual.value)
               formData.append("discapacidad", discapacidad.value)
               formData.append("tipoDiscapacidad", tipoDiscapacidad.value)
               formData.append("identidadEtnica", identidadEtnica.value)
               formData.append("celular", celular.value)
               formData.append("telefonoFijo", telefonoFijo.value)
               formData.append("foto", inputFileFotoFormEstudiante.files[0])
            const data = {
              dniEstudiante: dniEstudianteFormEstudiante.value,
              apellidosNombres: apellidosNombres.value,
              celularApoderado: celularApoderado.value,
              dniApoderado: dniApoderado.value,
              selectModalidad: selectModalidad.value,
              anioConclusion: anioConclusion.value,
              tipoColegio: tipoColegio.value,
              nombreColegio: nombreColegio.value,
              selectSedeExamen: selectSedeExamen.value,
              selectProgramaEstudio: selectProgramaEstudio.value,
              genero: genero.value,
              fechaNacimiento: fechaNacimiento.value,
              inputUbigeo: inputUbigeo.value,
              selectDepartamentoEstudiante: selectDepartamentoEstudiante.value,
              selectProvinciaEstudiante: selectProvinciaEstudiante.value,
              selectDistritoEstudiante: selectDistritoEstudiante.value,
              direccionActual: direccionActual.value,
              discapacidad: discapacidad.value,
              tipoDiscapacidad: tipoDiscapacidad.value,
              identidadEtnica: identidadEtnica.value,
              celular: celular.value,
              telefonoFijo: telefonoFijo.value,
              foto: inputFileFotoFormEstudiante.files[0],
            };
            setDatosComplementarios(formData);
          });    
     }

     if (window.location.pathname.includes('procesos.html')) {          
          axios.get(`${API_URL}${API_ADMINISTRADOR}/get-procesos`, axiosConfig)
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
                         const fechaText = document.createTextNode(item.fecha)
                         fechaCell.appendChild(fechaText)
                         row.appendChild(fechaCell)
                         const btnCell = document.createElement('td')
                         if(item.estado != 'cerrado') {
                              // Repite el proceso para estado y fecha
                              const btnText = (document.createElement('a'))
                              btnText.classList.add('link-danger')
                              btnText.innerHTML = "Cerrar"
                              btnCell.appendChild(btnText)
                         }
                         row.appendChild(btnCell)


                         table.appendChild(row)
                    }
               })
               .catch((error) => {
                    console.error('Error en la petición:', error)
               })

          btnGuardarNuevoProceso.addEventListener('click', () => {
               
               Swal.fire({
                    title: "Proceso?",
                    text: "Quieres guardar el proceso?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si"
                  }).then((result) => {
                    if (result.isConfirmed) {
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
                              `${API_URL}${API_ADMINISTRADOR}/crear-proceso`,
                              data,
                              axiosConfig
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

                    }
                  });
          })
     }
})

const searchEstudianteFromDNI = (dni) => {
     containerSpinner.style.display = 'flex'
     getDataEstudianteFromDNI({ dni }, (resp) => {
          if (resp.data.length == 0) {
               Toast.fire({
                    icon: 'error',
                    title: 'No se encontro estudiante con ese DNI'
               })
          } else {
               const nombre_completo = `${resp.data[0].nombres} ${resp.data[0].apellido_p} ${resp.data[0].apellido_m}`
               nombreEstudianteFormEstudiante.value = nombre_completo
               Toast.fire({
                    icon: 'success',
                    title: 'Se encontro estudiante con ese DNI'
               })
          }
          containerSpinner.style.display = 'none'
     })
}




const detenerIntervalo = () => {
     clearInterval(intervaloToken);
   }
   // Suma una hora (3600 segundos) a la fecha actual
   // const fechaMasUnaHora = new Date(fechaActual.getTime() + 3600 * 1000);
   const fechaMasUnaHora = localStorage.getItem('fecha-expiracion')
   // Obten la representación en milisegundos de la fecha resultante
   
   
   
   const checkToken = () => {
     const fechaActual = new Date().getTime()
     console.log('Tiempo A', fechaActual)
     console.log('Tiempo B', fechaMasUnaHora)

     const tiempoRestante = (fechaMasUnaHora - fechaActual) / 1000 / 60
     console.log(tiempoRestante)
     if(tiempoRestante < 0) {
          Swal.fire({
               title: "UNDAC?",
               text: "Su sesion vencio!",
               icon: "warning",
               confirmButtonColor: "#3085d6",
               confirmButtonText: "Listo"
             }).then((result) => {
               if (result.isConfirmed) {
                    cerrarSesionEvent()
                    location.reload()
               }
             });
     }
     else if(tiempoRestante < 5) {
          Swal.fire({
               title: "UNDAC?",
               text: "Esta a punto de vencer tu sesion",
               icon: "warning"
          });
       detenerIntervalo();
       return
     }
     else if(fechaMasUnaHora > fechaActual) {
       console.log("Todavia esta vigente tu token")
       console.log('Restante de vigencia', (fechaMasUnaHora - fechaActual) / 1000 / 60)
     }else {
       console.log("El token ya no sirve")
     }
   }
   const segundos = 60 * 4;
//    const segundos = 10;
   
   const milisegundos = segundos * 1000;
   
   // 300000
   // const fechaActual = new Date()
   // console.log('Fecha ahora', fechaActual.getTime());
   //  console.log('Fecha en una hora', fechaMasUnaHora);
   // console.log('Restante', fechaActual.getTime() - fechaMasUnaHora)
   const intervaloToken = setInterval(checkToken, milisegundos)
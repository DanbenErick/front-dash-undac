export const validarFormulario = (idFormulario) => {
     // Obtener el formulario

     const formulario = document.getElementById(idFormulario)

     // Obtener todos los elementos de formulario
     const elementosFormulario = formulario.elements

     // Bandera para verificar si hay algún campo vacío
     let hayCampoVacio = false

     // Iterar sobre los elementos del formulario
     for (let i = 0; i < elementosFormulario.length; i++) {
          const elemento = elementosFormulario[i]
          // Verificar si el elemento es un campo de entrada y está vacío
          if (elemento.tagName === 'INPUT' && elemento.value.trim() === '')
               hayCampoVacio = true
          if (elemento.tagName === 'SELECT' && elemento.value.trim() === '')
               hayCampoVacio = true
     }

     // Si hay algún campo vacío, mostrar un mensaje o realizar otra acción
     if (hayCampoVacio) {
          return { ok: false, messange: 'Hay un campo vacio' }
     } else {
          // Realizar acciones adicionales si el formulario es válido
          return { ok: true, message: 'Todo correcto' }
     }
}

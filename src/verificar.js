document.addEventListener('DOMContentLoaded', () => {
     const currentPath = window.location.pathname.toLowerCase();
     if (currentPath.includes('voucher.html') || currentPath.includes('procesos.html') || currentPath.includes('estudiantes.html') || currentPath.includes('resultados.html')) {
          if (typeof localStorage !== 'undefined') {
               // Recupera el valor del elemento del localStorage
               const miItem = localStorage.getItem('token')
               nombreUsuarioDashboard.textContent = localStorage.getItem('nombre')
               // Verifica si el elemento existe y tiene contenido
               if (miItem !== null && miItem.trim() !== '') {
                    console.log('El elemento "miItem" existe y tiene contenido:', miItem)
               } else {
                    console.log('El elemento "miItem" existe, pero está vacío.')
                    window.location = 'login.html'
               }
          } else {
               console.log('El localStorage no está disponible en este navegador.')
               window.location = 'login.html'
          }
     }
})

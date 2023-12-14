export const cerrarSesionEvent = () => {
     localStorage.removeItem('token')
     localStorage.removeItem('id')
     localStorage.removeItem('nombre')
     location.reload()
}
document.addEventListener('DOMContentLoaded', () => {
     if (
          window.location.pathname.includes('voucher.html') ||
          window.location.pathname.includes('estudiantes.html') ||
          window.location.pathname.includes('procesos.html')
     ) {
          btnCerrarSesion.addEventListener('click', () => {
               cerrarSesionEvent()        
          })
     }
})

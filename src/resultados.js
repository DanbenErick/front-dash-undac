import { registrarSolapaPrincipal, registrarSolapaSecundaria } from './api/resultadosApi'

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('resultados.html')) {
        btnProcesarSolapaPrincipalFormResultados.addEventListener('click', () => {
            const formData = new FormData()
            formData.append('archivo', inputSolapaPrincipalFormResultados.files[0])
            registrarSolapaPrincipal(formData, (resp) => {
                console.log(resp)
            })
            
        })
        btnProcesarSolapaSecundariaFormResultados.addEventListener('click', () => {
            const formData = new FormData()
            formData.append('archivo', inputSolapaSecundarioFormResultados.files[0])
            registrarSolapaSecundaria(formData, resp => {
                console.log(resp);
            })
            
        })
    }
})
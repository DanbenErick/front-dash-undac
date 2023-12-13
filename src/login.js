import { login } from './api/sistema'

document.addEventListener('DOMContentLoaded', () => {
     if (window.location.pathname.includes('login.html')) {
          btnLogin.addEventListener('click', () => {
               const inputUsername = document.querySelector(
                    '#formLogin #username'
               ).value
               const inputPassword = document.querySelector(
                    '#formLogin #password'
               ).value
               containerSpinner.style.display = 'flex'
               login({ username: inputUsername, password: inputPassword })
          })
     }
})

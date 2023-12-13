import { register } from './api/sistema'

document.addEventListener('DOMContentLoaded', () => {
     if (window.location.pathname.includes('register.html')) {
          btnRegister.addEventListener('click', () => {
               const inputUsername = document.querySelector(
                    '#formRegister #username'
               ).value
               const inputEmail = document.querySelector(
                    '#formRegister #email'
               ).value
               const inputPassword = document.querySelector(
                    '#formRegister #password'
               ).value

               register({
                    username: inputUsername,
                    name: inputEmail,
                    password: inputPassword
               })
          })
     }
})

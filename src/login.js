import {login} from './api/sistema'





document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('login.html')) {
        btnLogin.addEventListener('click', () => {
            const inputUsername = document.querySelector("#formLogin #username").value
            const inputPassword = document.querySelector("#formLogin #password").value

            login({username:  inputUsername, password: inputPassword})
        })
      }
})
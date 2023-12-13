(()=>{var e={587:()=>{document.addEventListener("DOMContentLoaded",(function(){(window.location.pathname.includes("voucher.html")||window.location.pathname.includes("estudiantes.html")||window.location.pathname.includes("procesos.html"))&&btnCerrarSesion.addEventListener("click",(function(){localStorage.removeItem("token"),localStorage.removeItem("id"),localStorage.removeItem("nombre"),location.reload()}))}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=require("sweetalert2");var t=n.n(e);const o=require("axios");var a=n.n(o);const r=require("dotenv-webpack");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}(0,r.config)(),(0,r.config)(),document.addEventListener("DOMContentLoaded",(function(){window.location.pathname.includes("login.html")&&btnLogin.addEventListener("click",(function(){var e,t=document.querySelector("#formLogin #username").value,n=document.querySelector("#formLogin #password").value;containerSpinner.style.display="flex",e={username:t,password:n},a().post("".concat("http://localhost:8000").concat("/api/administrador","/login"),e).then((function(e){console.log(e),localStorage.setItem("token",e.data.token),localStorage.setItem("id",e.data.id),localStorage.setItem("nombre",e.data.name),location.reload(),containerSpinner.style.display="none"})).catch((function(e){console.error(e),containerSpinner.style.display="none"}))}))})),document.addEventListener("DOMContentLoaded",(function(){window.location.pathname.includes("register.html")&&btnRegister.addEventListener("click",(function(){var e;e={username:document.querySelector("#formRegister #username").value,name:document.querySelector("#formRegister #email").value,password:document.querySelector("#formRegister #password").value},a().post("".concat("http://localhost:8000").concat("/api/administrador","/register"),e).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("id",e.data.id),localStorage.setItem("nombre",e.data.name),location.reload(),containerSpinner.style.display="none"})).catch((function(e){console.error(e),containerSpinner.style.display="none"}))}))})),(0,r.config)();var i=t().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:6e3,timerProgressBar:!0,didOpen:function(e){e.onmouseenter=t().stopTimer,e.onmouseleave=t().resumeTimer}}),d=function(){var e;containerSpinner.style.display="flex",e=function(e){var t=document.querySelector("table tbody");t.innerHTML="";var n,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){d=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(d)throw r}}}}(e.data);try{for(o.s();!(n=o.n()).done;){var a=n.value,r=document.createElement("tr"),i=document.createElement("td"),d=document.createTextNode(a.id);i.appendChild(d),r.appendChild(i);var l=document.createElement("td"),u=document.createTextNode(a.codigo);l.appendChild(u),r.appendChild(l);var s=document.createElement("td"),m=document.createTextNode(a.dni);s.appendChild(m),r.appendChild(s);var p=document.createElement("td"),f=document.createTextNode(a.fecha);p.appendChild(f),r.appendChild(p);var h=document.createElement("td"),v=document.createTextNode(a.nombre);h.appendChild(v),r.appendChild(h);var g=document.createElement("td"),y=document.createTextNode(a.proceso);g.appendChild(y),r.appendChild(g);var E=document.createElement("td"),b=document.createTextNode("S/ "+a.monto);E.appendChild(b),r.appendChild(E),t.appendChild(r)}}catch(e){o.e(e)}finally{o.f()}containerSpinner.style.display="none"},a().get("".concat("http://localhost:8000").concat("/api/administrador","/get-vouchers")).then((function(t){console.log(t.data),e(t),containerSpinner.style.display="none"})).catch((function(e){console.error(e),containerSpinner.style.display="none"})),a().get("".concat("http://localhost:8000").concat("/api/administrador","/get-procesos")).then((function(e){console.log(e.data),function(e){e.data.filter((function(e){return"abierto"==e.estado})).forEach((function(e){var t=document.createElement("option");t.value=e.nombre,t.text=e.nombre,selectTipoVoucherFormVoucher.add(t)}))}(e)})).catch((function(e){console.error(e),containerSpinner.style.display="none"}))},l=function(){var e,t;containerSpinner.style.display="flex",e={dni:inputDNIFormVoucher.value},t=function(e){if(0==e.data.length)i.fire({icon:"error",title:"No se encontro estudiante con ese DNI"});else{var t="".concat(e.data[0].nombres," ").concat(e.data[0].apellido_p," ").concat(e.data[0].apellido_m);inputNombreCompletoFormVoucher.value=t,i.fire({icon:"success",title:"Se encontro estudiante con ese DNI"})}containerSpinner.style.display="none"},a().post("".concat("http://localhost:8000").concat("/api/administrador","/get-data-from-dni-estudiante"),e).then((function(e){t(e)})).catch((function(e){console.error(e),containerSpinner.style.display="none"}))},u=function(e){!function(e){for(var t=document.getElementById("formGuardarVoucher").elements,n=!1,o=0;o<t.length;o++){var a=t[o];"INPUT"===a.tagName&&""===a.value.trim()&&(n=!0),"SELECT"===a.tagName&&""===a.value.trim()&&(n=!0)}return n?{ok:!1,messange:"Hay un campo vacio"}:{ok:!0,message:"Todo correcto"}}().ok?i.fire({icon:"warning",title:"Rellena todos los datos requeridos"}):t().fire({title:"Voucher?",text:"Desear guardar el voucher?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, deseo guardar"}).then((function(e){var t;e.isConfirmed&&(containerSpinner.style.display="flex",t={tipoVoucher:selectTipoVoucherFormVoucher.value,fecha:inputFechaFormVoucher.value,nombreCompleto:inputNombreCompletoFormVoucher.value,dni:inputDNIFormVoucher.value,monto:inputMontoFormVoucher.value,codigo:inputCodigoFormVoucher.value},a().post("".concat("http://localhost:8000").concat("/api/administrador","/set-voucher"),t).then((function(e){console.log(e.data),function(e){e.data.affectedRows?(i.fire({icon:"success",title:"Se guardo correctamente el voucher"}),d()):i.fire({icon:"error",title:"Ocurrio un error"})}(e)})).catch((function(e){console.error(e),containerSpinner.style.display="none"})),containerSpinner.style.display="none")}))};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}document.addEventListener("DOMContentLoaded",(function(){window.location.pathname.includes("voucher.html")&&(btnRefreshTableVoucher.addEventListener("click",d),btnBuscarEstudianteFromDNI.addEventListener("click",l),btnGuadarVoucherFormVoucher.addEventListener("click",u),d())})),n(587),(0,r.config)(),document.addEventListener("DOMContentLoaded",(function(){window.location.pathname.includes("estudiantes.html")&&(a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-departamentos")).then((function(e){console.log(e.data),e.data.forEach((function(e){var t=document.createElement("option");t.value=e.Departamento,t.text=e.Departamento,selectDepartamentoEstudiante.add(t)}))})).catch((function(e){return console.error(e)})),a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-discapacidades")).then((function(e){console.log(e.data),e.data.forEach((function(e){var t=document.createElement("option");t.value=e.discapacidad,t.text=e.discapacidad,tipoDiscapacidad.add(t)}))})).catch((function(e){return console.error(e)})),a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-etnicas")).then((function(e){console.log(e.data),e.data.forEach((function(e){var t=document.createElement("option");t.value=e.etnia,t.text=e.etnia,identidadEtnica.add(t)}))})).catch((function(e){return console.error(e)})),a().get("".concat("http://localhost:8000").concat("/api/administrador","/get-procesos")).then((function(e){console.log(e.data),e.data.filter((function(e){return"abierto"==e.estado})).forEach((function(e){var t=document.createElement("option");t.value=e.nombre,t.text=e.nombre,selectModalidad.add(t)}))})),a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-sedes")).then((function(e){console.log(e.data),e.data.forEach((function(e){var t=document.createElement("option");t.value=e.sede,t.text=e.sede,selectSedeExamen.add(t)}))})),a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-programas-estudio")).then((function(e){console.log(e.data),e.data.forEach((function(e){var t=document.createElement("option");t.value=e.nombre,t.text=e.nombre,selectProgramaEstudio.add(t)}))})),selectDepartamentoEstudiante.addEventListener("change",(function(){var e;e=selectDepartamentoEstudiante.value,a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-provincias?departamento=").concat(e)).then((function(e){e.data.forEach((function(e){var t=document.createElement("option");t.value=e.Provincia,t.text=e.Provincia,selectProvinciaEstudiante.add(t)}))}))})),selectProvinciaEstudiante.addEventListener("change",(function(){var e,t;e=selectDepartamentoEstudiante.value,t=selectProvinciaEstudiante.value,a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-distritos?departamento=").concat(e,"&provincia=").concat(t)).then((function(e){e.data.forEach((function(e){var t=document.createElement("option");t.value=e.Distrito,t.text=e.Distrito,selectDistritoEstudiante.add(t)}))}))})),selectDistritoEstudiante.addEventListener("change",(function(){var e,t,n;e=selectDepartamentoEstudiante.value,t=selectProvinciaEstudiante.value,n=selectDistritoEstudiante.value,a().get("".concat("http://localhost:8000").concat("/api/estudiantes","/get-ubigeo?departamento=").concat(e,"&provincia=").concat(t,"&distrito=").concat(n)).then((function(e){inputUbigeo.value=e.data[0].ubigeo}))}))),window.location.pathname.includes("procesos.html")&&(a().get("".concat("http://localhost:8000").concat("/api/administrador","/get-procesos")).then((function(e){console.log(e.data);var t,n=document.querySelector("table tbody"),o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw r}}}}(e.data);try{for(o.s();!(t=o.n()).done;){var a=t.value,r=document.createElement("tr"),c=document.createElement("td"),i=document.createTextNode(a.id);c.appendChild(i),r.appendChild(c);var d=document.createElement("td"),l=document.createTextNode(a.nombre);d.appendChild(l),r.appendChild(d);var u=document.createElement("td"),m=document.createTextNode(a.estado);u.appendChild(m),r.appendChild(u);var p=document.createElement("td"),f=document.createTextNode(a.nombre);p.appendChild(f),r.appendChild(p),n.appendChild(r)}}catch(e){o.e(e)}finally{o.f()}})).catch((function(e){console.error("Error en la petición:",e)})),btnGuardarNuevoProceso.addEventListener("click",(function(){var e=document.querySelector("#formCrearProceso .nombre"),n=document.querySelector("#formCrearProceso .estado"),o=document.querySelector("#formCrearProceso .fecha"),r={nombre:e.value,estado:n.value,fecha:o.value};a().post("".concat("http://localhost:8000").concat("/api/administrador","/crear-proceso"),r).then((function(a){console.log("Respuesta del servidor:",a.data),a.data.affectedRows&&(t().fire({title:"Correcto!",text:"Se registro correctamente",icon:"success",confirmButtonText:"Ok"}),e.value="",n.value="",o.value="",btnCloseModalProceso.click(),location.reload())})).catch((function(e){console.error("Error en la petición:",e)}))})))}))})()})();
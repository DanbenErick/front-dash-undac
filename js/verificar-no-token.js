// Verifica si el localStorage está disponible en el navegador
if (typeof localStorage !== 'undefined') {
    // Recupera el valor del elemento del localStorage
    const miItem = localStorage.getItem('token');

    // Verifica si el elemento existe y tiene contenido
    if (miItem !== null && miItem.trim() !== '') {
    console.log('El elemento "miItem" existe y tiene contenido:', miItem);
    window.location = 'voucher.html'
    } else {
    console.log('El elemento "miItem" existe, pero está vacío.');
    }
    } else {
    console.log('El localStorage no está disponible en este navegador.');
    }
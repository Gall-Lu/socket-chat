var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = ('index.html');
    // throw new Error('El nombre es necesario');

}

var nombre = params.get('nombre');
var sala = params.get('sala');


socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', { nombre: nombre, sala: sala }, function(resp) {
        console.log('Usuarios conectados: ', resp);

    });

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

// Escuchar cuando un usuario entra o sale del chat.
socket.on('listaPersonas', function(personas) {

    console.log('Servidor:', personas);

});


/// Mensaje privados
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado: ', mensaje);

});
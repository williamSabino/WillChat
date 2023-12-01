import eventoLogin from './eventos/eventoLogin.js';
import eventoPrincipal from './eventos/eventoPrincipal.js';
import io from './server.js';
import autenticarUsuario from '../server/middleware/authToken.js';

const nspPrincipal = io.of('principal');

//io.of('/principal').use(autenticarUsuario);

nspPrincipal.on('connection', (socket)=>{
    
    eventoPrincipal(socket, nspPrincipal);
});

io.of('/').on('connection', (socket)=>{
    console.log('connection', socket.id);
    eventoLogin(socket, io);
})


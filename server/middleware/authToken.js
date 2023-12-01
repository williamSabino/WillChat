import jwt from 'jsonwebtoken';

function autenticarUsuario (socket, next){
    const token = socket.handshake.auth.token;
    try {
       const playload = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        socket.emit('naoAutenticado');
        next();
    }
}


export default autenticarUsuario;
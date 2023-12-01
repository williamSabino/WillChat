import { encontrarUser, inserirUser } from '../db/db.js';
import bcrypt from 'bcrypt';
import criarToken from '../utils/criarToken.js';

function eventoLogin(socket, io) {

    // Sockets Login
    socket.on('inserirUser', async ({ email, senha }) => {
        const user = await encontrarUser(email);
        if (user[0].length === 0) {
            const round = 10;
            bcrypt.genSalt(round, async (err, salt) => {
                bcrypt.hash(senha, salt, async (err, hash) => {
                    await inserirUser({ email: email, hashSenha: hash, saltSenha: salt });
                });

            });
            socket.emit('userCadastrado');
        } else {
            socket.emit('userExistente');
        }

    });

    socket.on('validarUser', async ({ email, senha }) => {
        const user = await encontrarUser(email);
        const userEncontrado = user[0][0];
        if (user[0].length > 0) {
            bcrypt.compare(senha, userEncontrado.hashSenha, async (err, hash) => {
                if (hash) {
                    const jwt = criarToken({ email: userEncontrado.email });
                    socket.emit('userValidado', jwt, email);
                } else {
                    socket.emit('userNaoValidado');
                }
            });
        } else {
            socket.emit('UserInvalido');
        }
    });
}

export default eventoLogin;
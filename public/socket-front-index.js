import {gerarCookies} from "./utilsFront/cookies.js";

const socket = io();

function validarUser(user) {
    socket.emit('validarUser', user);
};

function inserirUser(user){
    socket.emit('inserirUser', user);
}


socket.on('userCadastrado', ()=>{
    alert('UserCadastrado');
});

socket.on('userExistente', ()=>{
    alert('User Existente');
});

socket.on('UserInvalido', ()=>{
    alert('Usuario Invalido!');
});

socket.on('userValidado', (jwt, email)=>{
    gerarCookies('tokenJWT', jwt);
    localStorage.setItem('email', email);
    window.location.href = '/principal';
});

socket.on('userNaoValidado', ()=>{
    alert('Usuario Não autenticado!');
});

export {validarUser, inserirUser};
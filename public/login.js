import { validarUser, inserirUser, recuperarSenha } from "./socket-front-index.js";

//Formularios
const formularioLogin = document.querySelector('.container__formulario-login');
const formularioCadastro = document.querySelector('.container__formulario-cadastro');
const formularioEsqueciSenha = document.querySelector('.container__formulario-esqueci-senha');
//containers
const containerLogin = document.querySelector('.login');
const containerCadastro = document.querySelector('.cadastro');
const containerEsqueciSenha = document.querySelector('.esqueci-senha');
//buttons
const btnEntrar = document.querySelector('.container__submit');
const btnCadastrar = document.querySelector('.container__cadastro');
const btnDirecionarCadastrar = document.querySelector('.container__login-btn-cadastrar');
const btnEsqueciSenha = document.querySelector('.container__login-btn-esqueci-Senha');
const btnVoltar = document.querySelector('.btnVoltar');
const btnVoltarEsqueciSenha = document.querySelector('.btnVoltar-esqueci-senha');
const btnEnviar = document.querySelector('input[value="Enviar"]');

btnEnviar.addEventListener('click', () => {
    const email = document.querySelector('#email-recuperacao').value;
    recuperarSenha(email);
});

btnDirecionarCadastrar.addEventListener('click', () => {
    containerLogin.style.display = 'none';
    containerCadastro.style.display = 'block';
});

btnEsqueciSenha.addEventListener('click', () => {
    containerCadastro.style.display = 'none';
    containerLogin.style.display = 'none';
    containerEsqueciSenha.style.display = 'block';
});

btnVoltar.addEventListener('click', () => {
    containerCadastro.style.display = 'none';
    containerEsqueciSenha.style.display = 'none';
    containerLogin.style.display = 'block';
});
btnVoltarEsqueciSenha.addEventListener('click', () => {
    containerCadastro.style.display = 'none';
    containerEsqueciSenha.style.display = 'none';
    containerLogin.style.display = 'block';
});

btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#password').value;
    if (email !== "" && senha !== "") {
        const data = new FormData(formularioLogin);
        const user = {
            email: data.get('email'),
            senha: data.get('password'),
        }
        validarUser(user);
    } else {
        alert('Digite um E-mail e Senha');
    }
});

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    const data = new FormData(formularioCadastro);
    const user = {
        email: data.get('email'),
        senha: data.get('password'),
    }
    inserirUser(user);
});
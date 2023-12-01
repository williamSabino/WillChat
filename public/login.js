import {validarUser, inserirUser} from "./socket-front-index.js";

const formularioLogin = document.querySelector('.container__formulario-login');
const formularioCadastro = document.querySelector('.container__formulario-cadastro');
const btnEntrar = document.querySelector('.container__submit');
const btnCadastrar = document.querySelector('.container__cadastro');
const containerLogin = document.querySelector('.login');
const containerCadastro = document.querySelector('.cadastro');
const btnDirecionarCadastrar = document.querySelector('.container__login-btn-cadastrar');
const btnVoltar = document.querySelector('.btnVoltar');

btnDirecionarCadastrar.addEventListener('click', () => {
    containerLogin.style.display = 'none';
    containerCadastro.style.display = 'block';
});

btnVoltar.addEventListener('click', () => {
    containerCadastro.style.display = 'none';
    containerLogin.style.display = 'block';
});

btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    const data = new FormData(formularioLogin);
    const user = {
        email: data.get('email'),
        senha: data.get('password'),
    }
    validarUser(user);
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
import { adicionarContato, atribuindoSala, atualizarContatos, enviarMensagem, selecionarContato } from "./socket-front-principal.js";

/*Enviar msg*/
let url = new URLSearchParams(window.location.search);
const btnEnviar = document.querySelector('.conversa__chat-btnEnviar');
const textArea = document.querySelector('.conversa__chat-textArea');
const containerMensagens = document.querySelector('.conversa__mensagens');
const tituloChat = document.querySelector('.container__conversa-Titulo');

// evento de click ao enviar mensagem
btnEnviar.addEventListener('click', (event) => {
    enviarMensagem(textArea.value, url.get('contato'), localStorage.getItem('email'));
    textArea.value = ''; 
});

//atualiza o container onde as mensagens são exibidas
function AtualizarContainerChat(mensagem) {
    limparTextArea();
    const mensagensOrdenadas = mensagem.sort((a, b) => {
        if (a.dataEnvio > b.dataEnvio) return 1;
        if (a.dataEnvio < b.dataEnvio) return -1
    });
    for (let item of mensagensOrdenadas) {
        if (item.emailAgent == localStorage.getItem('email')) {
            containerMensagens.innerHTML += `
            <div class="userAgent">
            <p class="mensagem">${item.mensagem}</p>
            </div>
            `;
        } else {
            containerMensagens.innerHTML += `
            <div class="userClient">
            <p class="mensagem">${item.mensagem}</p>
            </div>
            `;
        }
    }
};

//ao selecionar o contato o titulo é alterado baseado no contato escolhido
function AtualizarTituloChat(titulo) {
    tituloChat.textContent = `${titulo}`;
}
// limpa o container de mensagens
function limparTextArea() {
    containerMensagens.innerHTML = "";
}

/*Contatos Select*/


const listaContatos = document.querySelector('.lista__contatos');

atualizarContatos(localStorage.getItem('email'));

//funcão que busca no db os contatos e atualiza
function atualizarListaContatos(contato) {
    listaContatos.innerHTML += `
    <li class="linha__contatos">
    <img src="#"></img>
    <p class="contato">${contato}</p>
    </li>
    `
    const contatos = document.querySelectorAll('.contato');
    for (let item of contatos) {
        item.onclick = () => {
            url.set('contato', item.textContent);
            atribuindoSala(
                {
                    userClient:url.get('contato'),
                    userAgent:localStorage.getItem('email'),
                });
            AtualizarTituloChat(item.textContent);
            selecionarContato(localStorage.getItem('email'), item.textContent);
        };
    };
};


/*Contatos Add*/

const addContatosBtn = document.querySelector('.contatos__add-btn');
const addContatosInput = document.querySelector('.contatos__add');

addContatosBtn.addEventListener('click', () => {
    let email = addContatosInput.value;
    adicionarContato(email, localStorage.getItem('email'));
});


export { AtualizarContainerChat, atualizarListaContatos, limparTextArea }




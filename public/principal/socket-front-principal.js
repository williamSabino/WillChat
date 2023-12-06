import { obterCookie } from "../utilsFront/cookies.js";
import { AtualizarContainerChat, atualizarListaContatos } from "./principal.js";

//atribuindo sala /principal para o socket
const socket = io("/principal", {
    auth: {
        token: obterCookie('tokenJWT')
    }
});

function atualizarContatos(userAgent) {
    socket.emit("atualizarContatos", userAgent, (cbContatos) => {
        cbContatos.forEach((contato) => {
            atualizarListaContatos(contato.emailClient);
        });
    });
}

function enviarMensagem(mensagem, contato, userAgent) {
    socket.emit('enviarMensagem', { mensagem, contato, userAgent });
}

function selecionarContato(userAgent, contato) {
    socket.emit('selecionarContato', userAgent, contato, (cbmensagem) => {
        AtualizarContainerChat(cbmensagem);
    });
}
//ao enviar mensagem o front recebe de volta as mensagens trocadas com aquele usuario e atualiza no container
socket.on('enviarMensagemAtualizar', (mensagens) => {
    AtualizarContainerChat(mensagens);
});

//caso usuario não seja autenticado
socket.on('naoAutenticado', () => {
    alert('caiu Encerrada');
    window.location.href = '/';
})

// adiciona contato no banco de dados
function adicionarContato(email, userAgent) {
    socket.emit('adicionarContato', email, userAgent, (cbcontato) => {
        console.log(cbcontato);
        atualizarListaContatos(cbcontato.emailClient);
    });
}

//ao selecionar o contato vais ser atribuido uma sala para para que haja uma comunicação entre os dois 
function atribuindoSala({userClient, userAgent}) {
    socket.emit('atribuindoSala', {userClient, userAgent});
}


export {
    enviarMensagem,
    selecionarContato,
    atualizarContatos,
    atribuindoSala,
    adicionarContato
};
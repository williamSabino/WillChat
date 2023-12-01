import { obterCookie } from "../utilsFront/cookies.js";
import { AtualizarContainerChat, atualizarListaContatos } from "./principal.js";

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

socket.on('enviarMensagemAtualizar', (mensagens) => {
    AtualizarContainerChat(mensagens);
});

socket.on('naoAutenticado', () => {
    alert('caiu Encerrada');
    window.location.href = '/';
})

function adicionarContato(email, userAgent) {
    socket.emit('adicionarContato', email, userAgent, (cbcontato) => {
        console.log(cbcontato);
        atualizarListaContatos(cbcontato.emailClient);
    });
}

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
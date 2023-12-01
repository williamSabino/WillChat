import { buscarContatos, buscarMensagens, enviarMensagem, inserirContato } from '../db/db.js';

function eventoPrincipal(socket, io) {
    //sockets Principal
    socket.on('atribuindoSala', ({userClient,userAgent})=>{
        let salaIda = userClient + userAgent;
        let salaVolta = userAgent + userClient;
        socket.leave(salaIda || salaVolta);
        socket.join(salaIda || salaVolta);
    });

    socket.on('adicionarContato', async(email,userAgent, cbcontato)=>{
        await inserirContato(userAgent, email);
        const contatos = await buscarContatos(userAgent);
        const indexLastContato = contatos[0].length-1;
        cbcontato(contatos[0][indexLastContato]);
    });

    socket.on('atualizarContatos', async (userAgent, cbContatos) => {
        const contatos = await buscarContatos(userAgent);
        cbContatos(contatos[0]);
    });

    socket.on('selecionarContato', async (userAgent, contato, cbMensagem) => {
        const mensagensAgent = await buscarMensagens(userAgent, contato);
        const mensagensClient = await buscarMensagens(contato, userAgent);
        const mensagens = [...mensagensAgent[0], ...mensagensClient[0]];
        cbMensagem(mensagens);
    });

    socket.on('enviarMensagem', async ({ mensagem, contato, userAgent }) => {
        await enviarMensagem(userAgent, contato, mensagem);
        const mensagensAgent = await buscarMensagens(userAgent, contato);
        const mensagensClient = await buscarMensagens(contato, userAgent);
        const mensagens = [...mensagensAgent[0], ...mensagensClient[0]];
        let salaIda = contato + userAgent;
        let salaVolta = userAgent + contato;
        io.to(salaIda).to(salaVolta).emit("enviarMensagemAtualizar", mensagens);
    });
}

export default eventoPrincipal;
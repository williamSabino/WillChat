import mysql from 'mysql2/promise';

// cria conexão com banco de dados
async function connect() {
    if (global.connection &&
        global.connection.state !== 'disconnected')
        return global.connection;

    const connectionString = 'http://root:2william.@localhost:3306/willchat';
    const connection = await mysql.createConnection(connectionString);
    global.connection = connection;
    console.log('DB willchat Conectaddo !!')

    return global.connection;
}
connect();


//funcções Query

/*User*/
async function encontrarUser(email) {
    const connection = await connect();
    const sql = `select * from usuario where email = "${email}"`;
    return await connection.query(sql);
}

async function inserirUser(user) {
    const connection = await connect();
    const sql = `insert into usuario (email, hashSenha, saltSenha) values ("${user.email}", "${user.hashSenha}", "${user.saltSenha}")`;
    return await connection.query(sql);
};

/*Mensagem*/

async function enviarMensagem(emailAgent, emailClient, mensagem) {
    const connection = await connect();
    const data = new Date();
    const opcoesData = { day: 'numeric', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    const dataformat = data.toLocaleDateString('pt-BR', opcoesData);
    const sql = `insert into mensagens (emailAgent, emailClient, dataEnvio, mensagem) values ("${emailAgent}", "${emailClient}", "${dataformat}", "${mensagem}")`;

    return await connection.query(sql);
};


async function buscarMensagens(userAgent, userClient) {
    const connection = await connect();
    const sql = `select emailAgent,mensagem,dataEnvio from mensagens where emailAgent = "${userAgent}" and emailClient = "${userClient}";`;

    return await connection.query(sql);
}


/*Contatos*/

async function buscarContatos(userAgent) {
    const connection = await connect();
    const sql = `select emailClient from contatos where emailAgent = "${userAgent}"`;

    return await connection.query(sql);
}

async function inserirContato(emailAgent, emailClient) {
    const connection = await connect();
    const sql = `insert into contatos (emailAgent, emailClient) values ("${emailAgent}","${emailClient}")`;
    return await connection.query(sql);
}


export {
    encontrarUser,
    inserirUser,
    enviarMensagem,
    buscarMensagens,
    buscarContatos,
    inserirContato
};
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import path from 'path';
import url from 'url';
import './db/db.js';
import "dotenv/config.js";
const port = 3000;
const app = express();
const caminhoAtual = url.fileURLToPath(import.meta.url);

app.use(express.static(path.join(caminhoAtual, '../../', 'public')));

const serverhttp = http.createServer(app);

serverhttp.listen(port, ()=> console.log('listening on port' + port)); 

const io = new Server(serverhttp);

export default io;


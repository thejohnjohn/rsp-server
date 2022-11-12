import { Server } from 'socket.io';
import express from 'express';
import { createServer } from "http";
import { v4 as uuidv4 } from 'uuid';

const port = 3000;

const app = express();

const people = { id:uuidv4(), name: 'James' }

app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer);

app.get('/', (request, response) => {
  response.send(people);
});

io.on('connection', (socket) => {
  console.log(socket.id);  
  return socket.id;
});

httpServer.listen(port);


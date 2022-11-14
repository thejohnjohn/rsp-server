import { Server } from 'socket.io';
import express from 'express';
import { createServer } from "http";
import { createClient } from 'redis';

const port = 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

io.on('connection', (socket) => {
  socket.on('player', (player) => {
    const { id, gameType } = player;
    await client.set(gameType, );
  });
});

httpServer.listen(port);


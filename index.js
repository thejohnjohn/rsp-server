import { Server } from 'socket.io';
import express from 'express';
import { createServer } from "http";
import Redis from 'ioredis';

const port = 3000;

const redis = new Redis(); 

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const playerList = [];
let playerOne;
let playerTwo;

io.on('connection', (socket) => {
  socket.on('player', async (player) => {
    console.log(typeof player);
    const roomName = '1000';
    playerList.push(player);
    socket.join(roomName);
   
    if (playerList.length >= 2) {
      playerOne = playerList[0];
      playerTwo = playerList[1];
    }

    if (playerTwo !== undefined) {
      io.to(roomName).emit(playerOne.id, playerTwo);
      io.to(roomName).emit(playerTwo.id, playerOne);
    }
  });
});
httpServer.listen(port);


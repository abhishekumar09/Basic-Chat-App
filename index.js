// import express from "express";
// import http from "http";
// import * as path from 'path';
// import { Server } from "socket.io";

// const app = express();
// const server = http.createServer(app);

// //import public folder
// app.use(express.static(path.resolve("./public")));

// // handler   ---   it handles the server
// const io = new Server(server);



// //socket.io
// //io.on -- use to make connection of socket
// io.on("connection", (socket) => {
//   // is scoket ke andr hmre client ka information hooga     or we also take name as socket it's our wish
//   console.log("user connected", socket.id); // we make id here
//   socket.on("user-send-message", (message) => {
//     console.log("New Message is :", message);                 // it showing new messages on  network by inspecting
//     io.emit("message :", message)                            // or ismein hmein yeh pta lga ki connection jo hei break nhi ho rha ek br reques send ki hein aur br br response mil rha hei 
//   });
// });



// app.get("/", (req, res) => {
//   return res.sendFile("/public/index.html");
// });

// server.listen(3000, () => {
//   console.log("listening on :3000");
// });




const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));
const io = new Server(server);

//Socket io

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("user-send-message", (message) => {
    console.log("New Message is :", message);
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(3000, () => console.log("Server Start"));
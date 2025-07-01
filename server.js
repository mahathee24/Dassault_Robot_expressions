const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('setMood', (mood) => {
    console.log('Mood received:', mood);
    io.emit('expression', mood); // broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

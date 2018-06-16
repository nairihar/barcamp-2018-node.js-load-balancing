const socketIo = require('socket.io');
const redisAdapter = require('socket.io-redis');

const redisOptions = {
    host: '127.0.0.1',
    port: 6379
};

const io = socketIo(process.env.PORT);
io.adapter(redisAdapter(redisOptions));


io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
    socket.on('hello', (msg) => {
        io.emit('hello', msg);
    });

    io.emit('new user', {
        socketId: socket.id
    });

    socket.on('disconnect', () => {        
        console.log(`${socket.id} disconnected`);
    });
});
console.log(`Socket Server running on ${process.env.PORT} port, PID: ${process.pid}`);

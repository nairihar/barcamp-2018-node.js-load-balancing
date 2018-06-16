const ioEmitter = require('socket.io-emitter');

const redisOptions = {
    host: '127.0.0.1',
    port: 6379
};

const io = ioEmitter(redisOptions);

io.emit('new user', {
    socketId: 'barcamp user'
});

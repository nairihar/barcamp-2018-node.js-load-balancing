const socket = io('http://0.0.0.0:7000', {
    transports: ['websocket']
});

socket.once('connect', () => {
    console.log(`Socket connected id: ${socket.id}`);
    socket.on('new user', ({ socketId }) => {
        console.log(`new user ${socketId}`);
    });

    socket.on('hello', (msg) => {
        console.log(`new message: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });

    document.addEventListener("click", () => {
        socket.emit('hello', `Hello from ${socket.id}`);
    });
});

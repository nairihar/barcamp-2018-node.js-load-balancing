const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('./hello.txt', (err, text) => {
        if (err) {
            console.error(err);
            return res.end();
        }
        res.end(`${text} Barcamp! PID: ${process.pid}`);
    });
});

app.listen(process.env.PORT);
console.log(`Api Server running on ${process.env.PORT} port, PID: ${process.pid}`);

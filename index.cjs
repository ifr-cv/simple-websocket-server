const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080, host: "0.0.0.0" });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on("open", () => {
        console.log('Client connected');
    })

    ws.on('message', (message) => {
        console.log('Received:', message);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

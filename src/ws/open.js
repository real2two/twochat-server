let connections = require("./connections");

module.exports = async ws => {
    // Add the websocket as part of the "connections" array.
    connections.push(ws);

    // Sends join message.
    const content = JSON.stringify({ a: 0, u: ws.username });
    for (let connection of connections) connection.send(content);
}
const connections = require("./connections");

module.exports = async ws => {
    connections.splice(connections.indexOf(ws), 1);

    // Sends leave message.
    const content = JSON.stringify({ a: 1, u: ws.username });
    for (const connection of connections) connection.send(content);
}

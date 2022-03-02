let connections = require("./connections");
const enc = new TextDecoder("utf-8");

module.exports = (ws, message, isBinary) => {
    if (isBinary) return;

    const content = enc.decode(new Uint8Array(message));
    if (!content.length) return;
    if (content.length > 2048) return;

    const send = JSON.stringify([ ws.username, content ]);
    for (let connection of connections) connection.send(send);
}
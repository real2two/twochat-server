module.exports = (res, req, context) => {
    const protocols_raw = req.getHeader('sec-websocket-protocol'); // Checks if there's a websocket protocol.
    if (!protocols_raw) return res.writeStatus('400').end(); // If there's no websocket protocol, send Bad Request.
    const protocols = protocols_raw.split(",").map(p => p.replace(/\s+/g, ' ').trim()); // Lists all protocols in an array.

    if (protocols.length !== 1) return res.writeStatus('400').end(); // The protocol should be "<username>".

    const [ username ] = protocols;
    if (!username.length) return res.writeStatus('400').end();
    if (username.length > 16) return res.writeStatus('400').end();
    if (username.replace(/[0-9a-zA-Z]/g, "").length > 0) return res.writeStatus('400').end();

    res.upgrade(
        {
           username
        },

        req.getHeader('sec-websocket-key'),
        protocols_raw,
        req.getHeader('sec-websocket-extensions'),

        context
    );
}

const { WS_IDLE_TIMEOUT, WS_MAX_BACKPRESSURE, WS_MAX_PAYLOAD_LENGTH } = process.env;

module.exports = app => {
    app.ws('/*', {
        idleTimeout: parseFloat(WS_IDLE_TIMEOUT),
        maxBackpressure: parseFloat(WS_MAX_BACKPRESSURE),
        maxPayloadLength: parseFloat(WS_MAX_PAYLOAD_LENGTH),
    
        upgrade: require(`./ws/upgrade`),
        open: require(`./ws/open`),
        message: require(`./ws/message`),
        close: require(`./ws/close`),
    });
}
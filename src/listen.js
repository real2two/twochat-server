module.exports = app => {
    const { PORT } = process.env;

    app.listen(parseFloat(PORT), listenSocket => {
        if (listenSocket) {
            console.log(`Listening to port ${PORT}.`);
        } else {
            console.log(`An error has occured while trying to listen the port.`);
        }
    });
}
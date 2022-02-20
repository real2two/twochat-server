require("dotenv").config();

const app = require('uWebSockets.js').App();

require("./websocket")(app);
require("./listen")(app);
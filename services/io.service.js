const ApiService = require("moleculer-web");
const SocketIOService = require("moleculer-io");

const service = {
      name: 'io',
      mixins: [ApiService, SocketIOService],
      settings: {
            port: 3005
      }

};
module.exports = service;
let ApiService = require("moleculer-web");

const service = {
      mixins: [ApiService],
  
      settings: {
          routes: [{
              aliases: {
                  "REST users": "users",
              }
          }]
      }
  };

module.exports = service;
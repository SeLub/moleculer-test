let { ServiceBroker } = require("moleculer");
let ApiService = require("moleculer-web");

let broker = new ServiceBroker({ logger: console });
broker.createService({
      name: "user",
      actions: {
          hello() {
              return "Hello API Gateway!"
          }
      }
  });

// Create a service
broker.createService({
      mixins: [ApiService],
  
      settings: {
          routes: [{
              aliases: {
                  "REST users": "users",
              }
          }]
      }
  });

  broker.createService({
      name: "users",
      actions: {
          list() {
              return "List of all users!"
          },
          get(ctx) {
            return `One user ${ctx.params.id}!`
          },
          create(ctx) {
            const { name, login } =ctx.params;
            const newUser = { name, login };
            return `Cteate one user\n${JSON.stringify(newUser)}`;
         },
         update(ctx) {
            const { name, login } =ctx.params;
            const updatedUser = { name, login };
            return `Update user ${ctx.params.id} \n ${JSON.stringify(updatedUser)}`
         },
         patch(ctx){
            const { name, login } =ctx.params;
            const updatedUser = { name, login };
            return `Patch user ${ctx.params.id} \n ${JSON.stringify(updatedUser)}`
         },
         remove(ctx) {
            return `Delete user ${ctx.params.id}!`
         },          
      }
  });

// Load API Gateway
//broker.createService(ApiService);

// Start server
broker.start();
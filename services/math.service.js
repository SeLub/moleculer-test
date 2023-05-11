const service = {
      name: "math",
      actions: {
        add(ctx) {
            const sum = Number(ctx.params.a) + Number(ctx.params.b);
            this.logger.info('Sum: ', sum);
            return sum;
        }
      }
    };
module.exports = service;
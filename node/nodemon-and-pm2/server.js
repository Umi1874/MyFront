const fastify = require("fastify")();
const url = require("url")


fastify.get("/", async () => {
  return {
    status: "123"
  };
});

fastify.listen(4001, function() {
  console.log("server start on 4001");
});

const express = require("express");
const next = require("next");


const port = process.env.PORT || 8081;
const host = process.env.HOST || localhost;
const app = next({ dev: process.env.NODE_ENV !== "production" })

(async () => {
  await app.prepare();
  const server = express();
  server.use(express.json())
  server.post('/login',(req,res) => {
    console.log(req,res,"salom");
  })

  await server.listen(port);
  console.log(`> Ready on http://${host}:${port}`);
})();

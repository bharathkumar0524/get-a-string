let express = require("express");
let app = express();

module.exports = app.get("/", (request, response) => {
  response.send("Express JS");
});

app.listen(3000);

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("port", port);
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get("/", function (_request, response) {
  response.send(`Hello World! My Port >> ${port}\n`);
});

app.get("/health", function (_request, response) {
  response.send("OK");
});

app.get("/doc", function (_request, response) {
  response.render("document", {
    port: port
  });
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at :" + app.get("port"));
});

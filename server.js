var port = process.env.PORT || 8080;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use("/api/productes", require("./controllers/api/productes"));
app.use("/",require("./controllers/static"));

//process.env.PORT
app.listen(port, function() {
    console.log("Server started on", port);
});

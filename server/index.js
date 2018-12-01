const express = require('express');
const app = express();
const fitapp = require('./fitApp/controller');

const port = process.env.port || 3000;
const server = "localhost";


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.use(express.json());
app.use("/", express.static(__dirname + "/../dist/"));

app.use(express.urlencoded({extended: true}));
app.use('/fitapp', fitapp);
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "/../dist/index.html")) );

app.listen(port);
console.log(`Listening on: http://${server}:${port}`);
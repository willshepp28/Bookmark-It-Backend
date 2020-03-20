const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const topicsAPI = require("./api/topics.api");


application = express();


application.use(morgan("combined"));

application.use(bodyParser.urlencoded());
application.use(bodyParser.json());


application.get("/", (request, response) => {
    return response.json("You are in the bookmark-it home path");
});

application.use("/api/topics", topicsAPI);


application.listen(3000, () => {
    console.log("Server listening on port 3000");
});
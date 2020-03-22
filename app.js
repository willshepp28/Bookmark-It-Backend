const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const topicsAPI = require("./api/topics.api");
const bookmarkAPI = require("./api/bookmarks.api");
const PORT = process.env.PORT || 3000;
const cors = require("cors");


application = express();

application.use(cors());
application.use(morgan("combined"));

application.use(bodyParser.urlencoded());
application.use(bodyParser.json());


application.get("/", (request, response) => {
    return response.json("Welcome to Bookmark It!!!");
});

application.use("/api/topics", topicsAPI);
application.use("/api/bookmarks", bookmarkAPI);


application.listen(PORT, () => {
    console.log("Server listening on port 3000");
});
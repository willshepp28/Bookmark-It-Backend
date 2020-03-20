const express = require("express");


application = express();




application.get("/", (request, response) => {
    return response.json("You are in the bookmark-it home path");
});



application.listen(3000, () => {
    console.log("Server listening on port 3000");
});
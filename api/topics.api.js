const router = require("express").Router();
const models = require("../db/models");





router.get("/", (request, response) => {
    models.Topic.findAll().then(topics => {
        return response.json(topics);
    });
});


router.get("/bookmarks", (request, response) => {
    models.Bookmark.findAll().then(bookmarks => {
        return response.json(bookmarks);
    });
});



module.exports = router;
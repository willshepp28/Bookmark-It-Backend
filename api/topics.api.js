const router = require("express").Router();
const models = require("../db/models");





router.get("/", (request, response) => {
    models.Topic.findAll().then(topics => {
        return response.json(topics);
    })
});



module.exports = router;
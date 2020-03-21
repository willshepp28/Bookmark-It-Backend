const router = require("express").Router();
const models = require("../db/models");




// Get all topics
router.get("/", (request, response) => {
    models.Topic.findAll().then(topics => {
        return response.json(topics);
    });
});




// Create new topic
router.post("/createNewTopic", (request, response) => {
    const body = request.body;

    models.Topic.create(body).then((user) => {
        return response.json(user)
    }).catch((error) => {
        return response.json(error);
    })
})




module.exports = router;
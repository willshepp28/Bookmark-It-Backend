const router = require("express").Router();
const models = require("../db/models");
const validateTopicCreationInput = require("../helpers/validation/create-topic.validator");
const _ = require("lodash");




// Get all topics
router.get("/", (request, response) => {
    models.Topic.findAll().then(topics => {
        return response.json(topics);
    });
});




// Create new topic
router.post("/createNewTopic", (request, response) => {
    const topic = validateTopicCreationInput(request.body);

    if(topic.error) {
        return response.status(400).json(topic.error.details.stack);
    }

    models.Topic.create(topic.value).then(() => {
        return response.json({ message: "Succesfully created new topic" });
    }).catch((error) => {
        return response.json(error);
    })
})




module.exports = router;
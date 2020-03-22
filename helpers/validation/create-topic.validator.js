const Joi = require('@hapi/joi');


// create a function that validates user input when creating a new bookmark
function validateTopicCreationInput(topicInput) {
    const schema = Joi.object({
        title: Joi.string().min(1).max(30).required()
    })

   return schema.validate(topicInput);
}



module.exports = validateTopicCreationInput;
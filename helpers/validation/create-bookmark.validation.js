const Joi = require('@hapi/joi');


// create a function that validates user input when creating a new bookmark
function validateBookmarkCreationInput(bookmarkInput) {
    const schema = Joi.object({
        title: Joi.string().min(1).required(),
        subject: Joi.string().min(1).required(),
        description: Joi.string().min(1).required(),
        link_url: Joi.string().min(1).required()
    })

   return schema.validate(bookmarkInput);
}



module.exports = validateBookmarkCreationInput;
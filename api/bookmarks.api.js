const router = require("express").Router();
const models = require("../db/models");




// Create a New Bookmark
router.post('/createNewBookmark', (request, response) => {
    const body = request.body;

    models.Bookmark.create(body).then((user) => {
        return response.json(user)
    }).catch((error) => {
        return response.json(error);
    })
});





// Get latest bookmarks
router.get("/getLatestBookmarks", (request, response) => {
    models.Bookmark.findAll({
        order: [['createdAt', 'ASC']],
        include: [{
            model: models.Topic
        }]
    }).then(data => {
        return response.json(data);
    })
    .catch(error => {
        return response.json(error);
    })
});




// Get bookmark by topic id
router.get("/topic/:id", (request, response) => {
    models.Bookmark.findAll({
        order:[['createdAt', 'ASC']],
        where: { topic_id: request.params.id},
        include: [{
            model: models.Topic
        }]
    }).then(bookmarks => {
        return response.json(bookmarks)
    }).catch(error => response.json(eror))
});



// Add new bookmark by topic name
router.post("/topic/:topicName", (request, response) => {

})

module.exports = router;
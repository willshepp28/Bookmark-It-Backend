const router = require("express").Router();
const models = require("../db/models");



router.get("/", (request, response) => {
    models.Bookmark.findAll().then(bookmarks => {
        return response.json(bookmarks);
    });
});



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



module.exports = router;
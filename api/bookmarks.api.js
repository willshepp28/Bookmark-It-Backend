const router = require("express").Router();
const models = require("../db/models");
const _ = require("lodash")




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
router.post("/addBookmarkByTopicName/:title", (request, response) => {
    const body = request.body;

    models.Topic.findOne({
        attributes: ['id'],
        where: {title: request.params.title}
    }).then((topic) => {
        body.topic_id = topic.id;
        models.Bookmark.create(body).then(bookmark => {
            return response.json(bookmark)
        })
    }).catch((error) => {
        return response.json(error);
    })
});



/**
 *  Add a new bookmark using topic name
 * 
 *  CAVEAT: 
 * - Using a topic name we should either find or create that topic,
 * -  return the topic.id
 * -  the create the bookmark using that topic.id 
 * - wrap all of this in a transaction
 */
router.post("/createBookmarkByTopic", (request, response) => {
    return models.sequelize.transaction(async(t) => {
        return models.Topic.findOrCreate({
            where: {title: request.body.title},
            defaults: {
                title: request.body.title,
                link_ur: "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png"
            },
            transaction: t
        })
        .then((topic) => {
            request.body.topic_id = topic[0].dataValues.id;
            return models.Bookmark.create(_.omit(request.body, ['title']), { transaction: t})
            .then((bookmark) => {
                return response.status(200).json(bookmark);
            })
            .catch((error) => {
                return response.json(error);
            })
        })
    })
});

module.exports = router;
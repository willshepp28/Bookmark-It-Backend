const router = require("express").Router();





router.get("/", (request, response) => {
    return response.json({
        id: 1, 
        title: 'Sequelize'
    })
})



module.exports = router;
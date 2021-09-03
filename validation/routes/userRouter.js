const express = require("express");
const router = express.Router();
const userController = require("../controllers/controllersUser")

// ici, on est dans /users

router.post("/", userController.addUser);

router.get('/:username', (req, res) => {
    const username = req.params.username
    res.json({
        status: "ok",
        message: username,
    })
})
module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/controllersUser")
// validator
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

// ici, on est dans /users

router.post("/", userController.addUser);

// validator 
app.post('/', (req, res) => {
    expressValidator.body("email").isEmail(),
        expressValidator.body("password").custom((value),
            expressValidator.body("age").custom((value),
                expressValidator.body("city").custom((value),
                    expressValidator.body("error").custom((value),
});



router.get('/:username', (req, res) => {
    const username = req.params.username
    res.json({
        status: "ok",
        message: username,
    })
})
module.exports = router;
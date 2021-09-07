const express = require("express");
const app = express();
const PORT = 3000;
// Import routers
const userRouter = require("./routes/userRouter");
const controllersUser = require("./controllers/controllersUser")

app.use(express.json())
// debut du validator

// fin du validator

app.use("/users", userRouter);



app.get('/', (_req, res) => {

    res.json({
        status: "OK",
        message: "all users",
    });
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`)
});
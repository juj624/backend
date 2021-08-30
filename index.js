const express = require('express');
const app = express();
const PORT = 8000;



let students = ["Laura", "ramad", "emran", "anthony", "julien"];

app.get('/students', (req, res) => {
    res.send(students);
});

app.post("/students", (req, res) => {
    let study = req.body
});

app.get("/students", (req, res) => {
    const query = req.query;
    console.log(query);

    res.json({
        status: "OK",
    });
});






app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
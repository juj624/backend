const express = require('express');
const app = express();
const PORT = 8000;



let students = ["Laura", "ramad", "emran", "anthony", "julien"];

app.get('/students', (req, res) => {
    res.send(students);
});

app.post("/students", (req, res) => {
    const body = req.body
    students.push(body.name);
});


app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
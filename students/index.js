const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

let students = ["Laura", "ramad", "emran", "anthony", "julien"];

app.get('/students', (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const body = req.body
    students.push(body.name);
    res.json(students);
});




app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
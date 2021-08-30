const express = require('express');
const app = express();
const PORT = 8000;



let students = ["Laura", "ramad", "emran", "anthony", "julien"];

app.get('/students', (req, res) => {
    res.send(students);
});

app.post("/students", (req, res) => {
    students.push("sarah").req.body
});







app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
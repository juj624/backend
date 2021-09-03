const express = require('express');
const multer = require('multer');
const path = require("path");
const fs = require("fs");
const app = express();
const upload = multer({ dest: 'public/uploads/' });
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));

const userspeople = ["pierro", "vincent"]

app.get('/', (req, res) => {
    res.json({ status: 'ok', });
});

app.post('/user', upload.single('image'), (req, res) => {
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    const name = req.query.name;
    console.log(name);
    res.json({ status: 'ok', });
});
// integration de la liste
app.get('/user/userspeople', (req, res) => {
    console.log("you add a new user ! great")
    // const listUers = listUers.map(req.params.userspeople)
    res.json(userspeople);
});


app.listen(3000, () => {
    console.log('Server started on port: ' + 3000);
});
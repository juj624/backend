const express = require('express');
const app = express();
//pour rendre accessible le config.env(configuration de l'API)
const dotenv = require('dotenv');
dotenv.config({
    path: "./config.env",
});
const mongoose = require('mongoose');
app.use(express.json());

let students = ["Laura", "ramad", "emran", "anthony", "julien"];
//Connexion a mangoDB
// On accède à la valeur DB qui se trouve dans le config.env
// Dans le string de connection à MongoDB, on remplace le mot de passe et le nom de la base de données
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB !");
    });

// Mongoose
// définition de la forme de mes documents
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("student", studentsSchema);

app.get('/students', async (req, res) => {
    res.json({
        message: "ok",
        data: students,
    });
    const students = await Student.find()
});


// inteargir avec la base. Un modèle est lié à une collection :


app.post("/students", async (req, res) => {
    const body = await Student.create(req.body)
    res.json({
        message: 'ok',
        data: body,
    });
});




app.listen(process.env.PORT, () => {
    console.log("Listening on port 8000");
});
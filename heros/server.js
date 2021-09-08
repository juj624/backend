const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({
    path: "./config.env",
});
const mongoose = require("mongoose");

app.use(express.json());


// Connexion à MongoDB
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
// Schéma pour définir la forme de vos documents
const superHerosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    power: Array,
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String,
});
const Hero = mongoose.model("heroes_list", superHerosSchema);

// middleware
function debug(req, res, next) {
    console.log("Je fais un console.log à chaque requête");
    next();
}
// j'utilise mon middleware
app.use(debug);

// route
app.get('/heroes', async (_req, res) => {
    const hero = await Hero.find()
    res.json({
        message: 'ok',
        data: hero,
    });
});

app.get('/heroes/:name', async (req, res) => {
    const hero = await Hero.findOne({ name: req.params.name })
    res.json(
        hero
    );
})

app.get('/heroes/:name/power', async (req, res) => {
    const hero = await Hero.findOne({ name: req.params.name })
    res.json(
        hero.power
    )
});

app.post('/heroes', async (req, res) => {
    const body = await Hero.create(req.body);
    res.json({
        message: 'ok',
        data: body,
    });
});



// function transformName(req, res, next) {
//     if (req.body.name === undefined) {
//         console.log("add's name")
//     }
//     const name = req.body.name.toLowerCase()
//     console.log(name)
//     next();
// }

app.patch('/heroes/:name/power', async (req, res) => {
    const power = req.body.power
    const hero = await Hero.updateOne({ name: new RegExp(req.params.name, 'i') }, { $push: { power: power } })

    if (hero) {
        res.json({
            status: 'ok',
            message: 'power is updated !'
        });
    }
    // if (powerMode) {
    //     const bodyPower = req.body.power;
    //     powerMode.power.push(bodyPower);
    //     res.json({ message: "Pouvoir ajouté !" })
    // }

})




app.listen(process.env.PORT, () => {
    console.log("Listening on port 3000");
});
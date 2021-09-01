const express = require("express");
const app = express();
const PORT = 8000;

// je communique en json avec mon back
app.use(express.json());

var superHeros = [{
    name: "Iron Man",
    power: ["money"],
    color: "red",
    isAlive: true,
    age: 46,
    image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
},
{
    name: "Thor",
    power: ["electricty", "worthy"],
    color: "blue",
    isAlive: true,
    age: 300,
    image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
},
{
    name: "Daredevil",
    power: ["blind"],
    color: "red",
    isAlive: false,
    age: 30,
    image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
}];


// middleware
function debug(req, res, next) {
    console.log("Je fais un console.log à chaque requête");
    next();
}
// j'utilise mon middleware
app.use(debug);

// route
app.get('/heroes', (req, res) => {
    res.json(superHeros)
})

app.get('/heroes/:name', (req, res) => {
    res.json(
        superHeros.filter(superHeros => superHeros.name.toLowerCase() === req.params.name)
    )
})

app.get('/heroes/:name/power', (req, res) => {
    const heros = superHeros.filter(superHero => superHero.name.toLowerCase() === req.params.name.toLowerCase())
    // console.log(hero)
    res.json(heros.map(hero => hero.power))
});

app.post('/heroes', transformName, (req, res) => {
    const newHero = req.body
    superHeros.push(newHero);
    res.json({ message: "Ok, héros ajouté" })
})

function transformName(req, res, next) {
    if (req.body.name === undefined) {
        console.log("add's name")
    }
    const name = req.body.name.toLowerCase()
    console.log(name)
    next();
}

app.patch('/heroes/:name/power', (req, res) => {
    const powerMode = superHeros.find(pdf => pdf.name.toLowerCase() === req.params.name.toLowerCase())
    if (powerMode) {
        const bodyPower = req.body.power;
        powerMode.power.push(bodyPower);
        res.json({ message: "Pouvoir ajouté !" })
    }

})

 


app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`)
});
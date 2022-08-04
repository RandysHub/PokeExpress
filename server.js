const { response } = require('express');
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
const mongoose = require('mongoose');
//Require pokemon DB
const Pokemon = require('./models/pokemon');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

//Middleware
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
 });

//Setting up views
app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));

app.listen(port, ()=> {
    console.log(`I am listening on port`, port);
});

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {
            pokemon: allPokemon     
        })
    })
});

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.post('/pokemon/', (req, res) => {
    let name = req.body.name.split('')
    name[0] = name[0].toUpperCase()
    req.body.name = name.join('')

    console.log.apply()
    Pokemon.create(req.body,(err, createdPokemon) => {
       res.redirect('/pokemon');
    //    res.send(createdPokemon);
    });
});

app.get('/pokemon/:id', (req, res) =>{

    Pokemon.findById(req.params.id, (err,foundPokemon) =>{
        res.render("Show", {
            pokemon: foundPokemon
        }); 
    });  
});
// app.delete('pokemon/:id', (req, res) => {
//     Pokemon.findByIdAndRemove({_id: req.params.id}).then(function(pokemon){
//         if(!pokemon)
//         res.send(pokemon)
//     })
// });

function add(num1, num2){
    return num1 + num2
}



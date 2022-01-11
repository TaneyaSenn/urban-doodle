// set up requirements and consts
const express = require("express");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine ({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// make public folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// body parser for POSTed data
app.use(express.urlencoded({extended: false }));


// routes
app.get("/cat", function(req, res){
    const cat = {
        ears: 2,
        sound: "meow",
        name: "Fluffy"
    }
    res.json(cat);
});

app.get("/", function(req, res){
    res.render("home")
})


// start server running
app.listen(port, function(){
    console.log(`App listening on port ${port}!`);
});
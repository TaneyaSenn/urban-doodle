// set up express and router
const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine ({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// make public folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// body parser for POSTed data
app.use(express.urlencoded({extended: false }));




// setup routes
app.use(require("./routes/app-routes"));

// start server running
app.listen(port, function(){
    console.log(`App listening on port ${port}!`);
});
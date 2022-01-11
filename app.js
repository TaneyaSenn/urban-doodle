const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


app.get("/cat", function(req, res){
    const cat = {
        ears: 2,
        sound: "meow",
        name: "Fluffy"
    }
    res.json(cat);
});


app.listen(port, function(){
    console.log(`App listening on port ${port}!`);
});
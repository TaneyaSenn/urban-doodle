const express = require("express");
const router = express.Router();

// routes
router.get("/cat", function(req, res){
    const cat = {
        ears: 2,
        sound: "meow",
        name: "Fluffy"
    }
    res.json(cat);
});

router.get("/", function(req, res){
    res.render("home")
})

// exporting routes
module.exports = router;

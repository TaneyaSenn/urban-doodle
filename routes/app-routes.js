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
// working
    res.locals.title = "home";
    res.render("home")
});

router.get("/about", function(req, res){
// working
    // res.locals.about = true;
    res.locals.title = "about";

    res.render("about")
});

router.get("/connect", function(req, res){
    
    res.locals.title = "connect";
    res.render("connect")
});

router.get("/logout", function(req, res){
// working
//*include toast message saying logged out*//
    res.locals.title = "home";
    res.redirect("/")
})

router.get("/login", function(req, res){

    res.locals.title = "login";
    res.render("login")
});

router.get("/signup", function(req, res){
    res.locals.title = "signup";
    res.render("signup")
})

// exporting routes
module.exports = router;

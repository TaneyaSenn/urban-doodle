// const { appendFile } = require("fs");

window.addEventListener("load", function(){

fetchCat();

async function fetchCat() {
    const response = await fetch("./cat");
    const json = await response.json;
    displayCat(json);
}

function displayCat(cat) {
    document.querySelector("#cat-name").innerHTML = cat.name;
    document.querySelector("#cat-sound").innerHTML = cat.sound;
}

});
var Dechets = ["bouteille-plastique.jpg", "bouteille-verre.jpg", "boite-conserve.jpg", "lait.jpg", "pomme.jpg", "carton.jpg", "pot de yaourt", "bouteille de coca", "mouchoir papier", "gobelet en plastique"];


var Utilsateur = [];

var pushJaune = [];
var pushBleu = [];
var PushVert = [];
var PushMarron = [];


var PoubelleJaune = [];
var PoubelleBleu = [];
var PoubelleVert = [];
var PoubelleMarron = [];


for (var i = 0; i < Dechets.length; i++) {
    var dechet = document.createElement('img');
    dechet.id = "dechet" + i;
    dechet.src = `images/${dechets[i]}`;
    dechet.draggable = "true";
    dechet.style.width = `${100}px`;
    dechet.style.height = `${100}px`;
    dechet.innerHTML = Dechets[i];
    document.getElementById('dechet-box').appendChild(dechet);


}

document.querySelector('#poubelle-jaune').addEventListener("drop", function (e) {
    e.preventDefault();


});

document.querySelector('#dechet0').addEventListener("dragover", function (e) {
    e.preventDefault();


})
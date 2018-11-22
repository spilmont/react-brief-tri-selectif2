var Dechets = ["bouteille plastique", "bouteille verre", "boite de conserve", "brique de lait", "pomme", "carton", "pot de yaourt", "bouteille de coca", "mouchoir papier", "gobelet en plastique"];


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
    var dechet = document.createElement('div');
    dechet.id = "dechet" + i;
    dechet.style.backgroundColor = "aqua";
    dechet.draggable = "true";
    dechet.style.width = `${100}px`;
    dechet.style.height = `${100}px`;
    dechet.innerHTML = Dechets[i];
    document.getElementById('dechet-box').appendChild(dechet);


}

document.querySelector('#poubelle-jaune').addEventListener("dragover", function (e) {
    e.preventDefault();
    alert(`vous avez bien deplacer l'élément${this.id}`);

});

document.querySelector('#dechet0').addEventListener("drop", function (e) {
    e.preventDefault();


});
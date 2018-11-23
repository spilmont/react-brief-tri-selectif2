var Dechets = ["bouteille en plastique", "bouteille en verre", "boite de conserve", "lait", "pomme", "carton", "yaourt", "canette de coca", "mouchoir en papier", "gobelet en plastique"];


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
    dechet.src = `images/${Dechets[i]}.jpg`;
    dechet.title = Dechets[i];
    dechet.draggable = "true";
    dechet.style.width = `${100}px`;
    dechet.style.height = `${100}px`;
    document.getElementById('dechet-box').appendChild(dechet);
}



document.querySelector('#poubelle-jaune').addEventListener("dragover", function (e) {
    e.preventDefault();
});
document.querySelector('#poubelle-bleu').addEventListener("dragover", function (e) {
    e.preventDefault();
});
document.querySelector('#poubelle-vert').addEventListener("dragover", function (e) {
    e.preventDefault();
});
document.querySelector('#poubelle-marron').addEventListener("dragover", function (e) {
    e.preventDefault();
});

for (var i = 0; i < Dechets.length; i++) {




    document.querySelector('#dechet' + i).addEventListener("dragend", function (e) {
        e.preventDefault();
        var select = this.title;
        var pJaune = document.querySelector('#poubelle-jaune');
        var pBleu = document.querySelector("#poubelle-bleu");
        var pVert = document.querySelector("#poubelle-vert");
        var pMarron = document.querySelector("#poubelle-marron");

        pushJaune.push(select);
        console.log("pj"+pushJaune);

      pJaune.addEventListener("drop", function (e) {
           e.preventDefault();
           alert(`${select} a été déposé dans la poubelle jaune`);


       });
        pBleu.addEventListener("drop", function (e) {
            e.preventDefault();
            alert(`${select} a été déposé dans la poubelle bleu`);

        });
        pVert.addEventListener("drop", function (e) {
            e.preventDefault();
            alert(`${select} a été déposé dans la poubelle vert`);

        });
        pMarron.addEventListener("drop", function (e) {
            e.preventDefault();
            alert(`${select} a été déposé dans la poubelle marron`);

        });*/
    });
}

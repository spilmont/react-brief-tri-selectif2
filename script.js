var Dechets = ["bouteille en plastique", "bouteille en verre", "boite de conserve", "lait", "pomme", "carton", "yaourt", "canette de coca", "mouchoir en papier", "gobelet en plastique"];
var currentId;
var score =0;
var Utilsateur = [];
var dechetNumJ = 0;
var dechetNumB = 0;
var dechetNumV = 0;
var dechetNumM = 0;


var pushJaune = [];
var pushBleu = [];
var pushVert = [];
var pushMarron = [];





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

for (var i = 0; i < Dechets.length; i++) {
    var dechetS = document.createElement('img');
    dechetS.src = `images/${Dechets[i]}.jpg`;
    dechetS.style.width = `${100}px`;
    dechetS.style.height = `${100}px`;
    document.getElementById('RPMarron').appendChild(dechetS);
}



var PoubelleJaune = [Dechets[0], Dechets[3], Dechets[5],Dechets[2],Dechets[7]];
var PoubelleBleu = [];
var PoubelleVert = [Dechets[1]];
var PoubelleMarron = [Dechets[4],Dechets[6],Dechets[8],Dechets[9]];



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

    document.querySelector('#dechet' + i).addEventListener("drag", function (e) {
        currentId = this.id;
    })
}


var pJaune = document.querySelector('#poubelle-jaune');
var pBleu = document.querySelector("#poubelle-bleu");
var pVert = document.querySelector("#poubelle-vert");
var pMarron = document.querySelector("#poubelle-marron");


pJaune.addEventListener("drop", function (e) {
    e.preventDefault();

    Utilsateur.push(document.getElementById(currentId).title);
    pushJaune.push(document.getElementById(currentId).title);
    console.log("user:" + Utilsateur);
    console.log(`jaune: ${pushJaune}`);
    comparerJaune();
    console.log(`score: ${[score]}`);
    document.getElementById("dechet-box").removeChild(document.getElementById(currentId));
    scorefinal();



});
pBleu.addEventListener("drop", function (e) {
    e.preventDefault();
    Utilsateur.push(document.getElementById(currentId).title);
    pushBleu.push(document.getElementById(currentId).title);
    console.log("user:" + Utilsateur);
    console.log(`bleu: ${pushBleu}`);
    comparerBleu();
    console.log(`score: ${[score]}`);
    document.getElementById("dechet-box").removeChild(document.getElementById(currentId));
    scorefinal();
});
pVert.addEventListener("drop", function (e) {
    e.preventDefault();
    Utilsateur.push(document.getElementById(currentId).title);
    pushVert.push(document.getElementById(currentId).title);
    console.log("user:" + Utilsateur);
    console.log(`vert: ${pushVert}`);
    comparerVert();
    console.log(`score: ${[score]}`);
    document.getElementById("dechet-box").removeChild(document.getElementById(currentId));
    scorefinal();
});
pMarron.addEventListener("drop", function (e) {
    e.preventDefault();
    Utilsateur.push(document.getElementById(currentId).title);
    pushMarron.push(document.getElementById(currentId).title);
    console.log("user:" + Utilsateur);
    console.log(`marron: ${pushMarron}`);
    compareMarron();
    console.log(`score: ${[score]}`);
    document.getElementById("dechet-box").removeChild(document.getElementById(currentId));
    scorefinal();
});


function comparerJaune() {

    for (var i = dechetNumJ; i < pushJaune.length; i++) {
        switch (pushJaune[i]) {
            case PoubelleJaune[0]:
                score++;
                break;
            case PoubelleJaune[1]:
                score++;
                break;
            case PoubelleJaune[2] :
                score++;
                break;
            case PoubelleJaune[3] :
                score++;
                break;
            case PoubelleJaune[4] :
                score++;
                break;
            default:
                break;
        }
    }

    dechetNumJ++;
}
function comparerBleu() {
    for (var i = dechetNumB; i < pushBleu.length; i++) {
        switch (pushBleu[i]) {
            default:
                break;
        }
    }
    dechetNumB++;
}
function comparerVert() {

    for (var i = dechetNumV; i < pushVert.length; i++) {
        switch (pushVert[i]) {
            case PoubelleVert[0]:
                score++;
                break;
            default:
                break;
        }
    }

    dechetNumV++;
}
function compareMarron(){
    for (var i = dechetNumM;i< pushMarron.length;i++){
        switch (pushMarron[i]) {
            case PoubelleMarron[0]:
                score++;
                break;
            case PoubelleMarron[1]:
                score++;
                break;
            case PoubelleMarron[2]:
                score++;
                break;
            case PoubelleMarron[3]:
                score++;
                break;
            default:
                break;
        }
    }
    dechetNumM++;
}

function scorefinal(){
    if(Utilsateur.length == 10){
        document.getElementById('game').style.display ="none";
        document.getElementById('score').style.display="block";

        document.getElementById('note').innerHTML=`note: ${score}/10`;
        document.getElementById('note').style.color="red";
        document.getElementById('note').style.fontSize = `${2}em`;

        document.getElementById('RPJaune').innerHTML= PoubelleJaune;
        document.getElementById('RPBleu').innerHTML=PoubelleBleu;
        document.getElementById('RPVert').innerHTML=PoubelleVert;
        document.getElementById('RPMarron').innerHTML=PoubelleMarron;

    }else{
        document.getElementById('game').style.display ="block";
        document.getElementById('score').style.display="none";
    }
}

let nameUser = document.getElementById('name');

let history = document.getElementById('history');
let button = document.getElementById('button');

let name = [
    "Geralt",
    "Yennefer",
    "Jaskier",
    "Vesemir",
    "Triss",
    "SEBASTIAN CASTELIANOS",
    "Ciri"
];

let objet = [
    " une Eppé",
    " un Livre",
    " un Balais",
    " une Guitare",
    " une Licorne"
];

let temperature = [
    "10°",
    "20°",
    "15°",
    "5°",
    "0°"
];

let places = [
    " à Novigrad ",
    " à Kaer Mohren ",
    " au Palais de Beuclair ",
    " à Blanchefleur ",
    " à Blaviken ",
    " aux iles Skelige "
];

let verbs = [
    "Se Bat contre les goules",
    "S'entraine",
    "Se Bat contre un cocatrix",
    "Pratique la magie",
    "Chante 'JETTE UN SOUS AU DAMIEN'",
    "Se Bat contre la chase sauvage"
];


button.addEventListener('click', function (){
    history.innerHTML +=  name[Math.floor(Math.random() * name.length)] + " avec " + objet[Math.floor(Math.random() * objet.length)]
        + " a une temperature de " + temperature[Math.floor(Math.random() * temperature.length)] + " se trouve "
        + places[Math.floor(Math.random() * places.length)] + verbs[Math.floor(Math.random() * verbs.length)]
        + " ! " + " Cette Histoire a ete generer par " + nameUser.value + '<br>';
});
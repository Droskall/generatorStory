let nameUser = document.getElementById('name');

let history = document.getElementById('history');
let button = document.getElementById('button');

let name = [
    "John Cena",
    "Roman Reigns",
    "Seth Rollins",
    "Brock Lesnar",
    "Edge",
    "The Rock",
    "SEBASTIAN CASTELIANOS",
    "The Fiend"
];

let objet = [
    " une Chaise",
    " un kendostick",
    " un Balais",
    " une Guitare",
    " une Table"
];

let temperature = [
    "10°",
    "20°",
    "15°",
    "5°",
    "0°"
];

let places = [
    " sur le ring ",
    " dans la cage ",
    " sur la rampe d'entrée ",
    " dans les tribunes ",
    " dans les coulises "
];

let verbs = [
    "Frappe son adversaire",
    "S'entraine",
    "Se Bat contre son adversaire",
    "Combat son chalenger",
    "Combat le champion"
];


button.addEventListener('click', function (){
    history.innerHTML +=  name[Math.floor(Math.random() * name.length)] + " avec " + objet[Math.floor(Math.random() * objet.length)]
        + " a une temperature de " + temperature[Math.floor(Math.random() * temperature.length)] + " se trouve "
        + places[Math.floor(Math.random() * places.length)] + verbs[Math.floor(Math.random() * verbs.length)]
        + " ! " + " Cette Histoire a ete generer par " + nameUser.value + '<br>';
});
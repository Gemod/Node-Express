//cosi creo un modulo da esportare nel  mio flow principale , cosi facendo 
//il debug è molto piu semplice e posso riutilizzare le componenti gia scritte precedentemente
var MAX = 100;
function randomInteger() {
return Math.floor((Math.random() * MAX));
}
module.exports = randomInteger;

// carne  - 400 gramas por pessoa  + de 6 horas  650
// cerveja 1200 ml  por pessoa  + de 6 horas  2000 ml
//refrigerante /agua  1000ml  por pessoa +6 horas  1500 ml 
// craiças valem 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado    = document.getElementById("resultado");

function calcular (){
  console.log("esse é oresultado");
  let Adultos        =  inputAdultos.value;
  let Criancas       =  inputCrianca.value;
let qtTotalDeCarne = 400  * Adultos + (400 / 2 * Criancas);
console.log(qtTotalDeCarne);
}

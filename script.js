// carne  - 400 gramas por pessoa  + de 6 horas  650
// cerveja 1200 ml  por pessoa  + de 6 horas  2000 ml
//refrigerante /agua  1000ml  por pessoa +6 horas  1500 ml 
// crianças valem 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado    = document.getElementById("resultado");

function calcular (){
  console.log("esse é oresultado");
  let Adultos        =  inputAdultos.value;
  let Criancas       =  inputCrianca.value;
  let duracao        = inputDuracao.value;
let qtTotalDeCarne = carnePP(duracao) * Adultos + (carnePP(duracao) / 2 * Criancas);
let qtTotalDeCerveja = cervejaPP(duracao) * Adultos ;
let qtTotalefrigerante = refrigerantePP(duracao) * Adultos + (refrigerantePP(duracao) / 2 * Criancas);
resultado.innerHTML=`<p> ${qtTotalDeCarne/1000} Kg de carne</p>`
resultado.innerHTML+=`<p> ${Math.ceil(qtTotalDeCerveja/ 350)} latas de cerveja </p>`
resultado.innerHTML+=`<p> ${Math.ceil(qtTotalefrigerante /2000)} garrafas  de refrigerante (2L)</p>`
}

function carnePP(duracao){
if (duracao >= 6) {
  return 650;
}else{
  return 400;
}
}

function cervejaPP(duracao){
  if (duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
  }
  function refrigerantePP(duracao){
    if (duracao >= 6) {
      return 1500;
    }else{
      return 1000;
    }
    }
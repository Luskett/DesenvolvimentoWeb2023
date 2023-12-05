let idade = Math.random()*10;
let idadeInteira = idade.toFixed(0) * idade.toFixed(0);

/*******************************************************************
console.log(idade)
console.log(idadeInteira)
*******************************************************************/

if(idadeInteira < 18) {
    console.log(`idade` +idadeInteira+/n+`Pessoa menor de Idade`)
}
else if(idadeInteira < 59) {
    console.log(`Pessoa Adulta`)
}
else {
    console.log(`Pessoa de terceira idade`)
}

const soma = 10 + 5;
const subtracao = 20 - 8;
const multiplicacao = 3 * 4;
const divisao = 50/2;
//console.log(resultado)

const primeirotexto = "10";
const segundotexto = "5";
const resultado = primeirotexto - segundotexto;
const textopreco = parsefloat(textopreco);

//console.log(typeof numerpreco);

const textoidade = "67";
const numeroidade = parseInt(textoidade);
//console.log(typeof numeroidade);
const textovalor = "42.5";
const valornumerico = Number(textovalor);
console.log(typeof valornumerico);

//Exemplo

const valordigitado = document.getElementById("campoprimeironumero").value;
const numeroconvertido = parsefloat(valordigitado);
//exibir resultado na tela
//<span id="textoresultado">30</span>
document.getElementById("textoresultado").innerText = `resultado ${numeroconvertido}`;

function somarnumeros(){
document.getElementById("camposegundonumero").value = `resultado ${numeroconvertido}`;
}
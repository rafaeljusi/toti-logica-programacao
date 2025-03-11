// Versão 1: Reflete o pseudocódigo da aula 1
let resposta = prompt("Olá, eu sou o Marvin. Quer deixar um recado? (s/n)");

if (resposta == "n") {
  alert("Adeus!");
} else {
  let nome = prompt("Qual seu nome?");
  let recado = prompt("Qual o recado?");
  alert(`Recado de ${nome}: ${recado}`);
}

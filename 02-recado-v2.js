// Versão 2: Verifica 'n' e 'N' (evolução do código)
let resposta = prompt("Olá, eu sou o Marvin. Quer deixar um recado? (s/n)");

let respostaNegativa = resposta == "n" || resposta == "N";

const DEBUG_MSG = `[DEBUG] Resposta foi não? ${respostaNegativa}`;
console.debug(DEBUG_MSG);

if (respostaNegativa) {
  alert("Adeus!");
} else {
  let nome = prompt("Qual seu nome?");
  let recado = prompt("Qual o recado?");
  alert(`Recado de ${nome}: ${recado}`);
}

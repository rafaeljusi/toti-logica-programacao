// Versão 3: Verifica 'n' e 'N' (evolução do código)
const MSG_WELCOME = "Olá, eu sou o Marvin. Quer deixar um recado? (s/n)";
const MSG_NOME = "Qual seu nome?";
const MSG_RECADO = "Deixe um recado (ou envie vazio para sair)";

let resposta = prompt(MSG_WELCOME);

let respostaNegativa = resposta === "n" || resposta === "N" || !resposta === "" || resposta === null;

const DEBUG_MSG = `[DEBUG] Resposta foi não? ${respostaNegativa}`;
console.debug(DEBUG_MSG);

if (respostaNegativa) {
  alert("Adeus!");
} else {
  let nome = prompt(MSG_NOME);
  let recado = prompt(MSG_RECADO);
  alert(`Recado de ${nome}: ${recado}`);
}

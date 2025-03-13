// Versão 7: utiliza outras formas de loop e ordena os recados
const MSG_WELCOME = "Olá, eu sou o Marvin. Quer deixar um recado? (s/n)";
const MSG_NOME = "Qual seu nome?";
const MSG_RECADO = "Deixe um recado (ou envie vazio para sair)";

const resposta = prompt(MSG_WELCOME);

const respostaNegativa = resposta === "n" || resposta === "N" || !resposta === "" || resposta === null;

const DEBUG_MSG = `[DEBUG] Resposta foi não? ${respostaNegativa}`;
console.debug(DEBUG_MSG);

if (respostaNegativa) {
  alert("Adeus!");
} else {
  const nome = prompt(MSG_NOME);

  let lista_recados = [];

  let recado = prompt(MSG_RECADO);

  while (recado !== "") {
    lista_recados.push(recado);

    recado = prompt(MSG_RECADO);
  }

  // loop pela lista_recados utilizando for
  for (let i = 0; i < lista_recados.length; i++) {
    console.log(`for - Recado ${i}: ${lista_recados[i]}`);
  }

  // loop pela lista_recados utilizando forEach
  let counter = 0;
  lista_recados.forEach((recado) => {
    console.log(`forEach - Recado ${counter}: ${recado}`);
    counter++;
  });

  // Ordenação com sort nativo
  lista_recados.sort((a, b) => a.localeCompare(b));
  console.log("Recados ordenados:", lista_recados);

  const registro = criarRegistro(nome, lista_recados);

  const mensagem = JSON.stringify(registro, null, 4);

  alert(mensagem);
}

function criarRegistro(nome, lista_recados) {
  const novoRegistro = {
    nome: nome,
    recados: lista_recados,
  };

  novoRegistro["data"] = new Date();
  novoRegistro.version = "v7";

  return novoRegistro;
}

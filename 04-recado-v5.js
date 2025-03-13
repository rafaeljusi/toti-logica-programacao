// Versão 5: utiliza um objeto como resultado
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

  const registro = {
    nome: nome,
    recados: lista_recados,
  };

  registro["data"] = new Date();
  registro.version = "v5";

  const mensagem = JSON.stringify(registro, null, 4);

  alert(mensagem);
}

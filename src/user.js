const seguindo = require('./data/following');
const { alunos } = require('./data/alunos');
const { products } = require('./data/products');

const prompt = require('prompt');
const util = require('util');

console.clear();
// Map / Filter / Reduce /... (Funcionais); Retornam um array

// callback (função de retorno);
const lista = seguindo.map((cadaItem, indice) => {
  return {
    index: indice,
    username: cadaItem.login,
    userlink: cadaItem.url,
    userphoto: cadaItem.avatar_url,
  };
});

const alunosMaioresde25 = alunos.filter((objetoAluno) => objetoAluno.idade > 25);

const filtroPorBolsas = products.filter((itemLoja) => itemLoja.category === 'BAGS');

const name = "vinicius ribeiro";

const frutas = ['Maçã', 'Banana', 'Tomate'];

const frutasLowercase = frutas.map((fruta) => fruta.toLowerCase());

//console.log(frutasLowercase.includes('TOMATE'.toLowerCase()));

// Voltando do café ☕

// Fazer o node pedir ao usuário pelo termo que ele quer buscar -- ok
// Guardar esse termo numa variável --ok
// Garantir que o termo seja em caixa baixa --ok
// Garantir que os nomes dos produtos também seja em caixa baixa --ok
// Percorrer todos os objetos de produtos e verificar aquele cujo o nome bata com o termo --ok

prompt.start();

prompt.get(['busca'], function (err, resultado) {
  const { busca } = resultado;
  const buscaMinusculo = busca.toLowerCase();

  const produtosEncontrados = products
    .filter((produto) => produto.name.toLowerCase().includes(buscaMinusculo));

  console.log(util.inspect(produtosEncontrados, {showHidden: false, depth: null}))
});

// const somaDasIdades = alunos.reduce((acumulador, aluno) => {
//   acumulador = acumulador + aluno.idade;

//   return acumulador;
// }, 0);

// const alunosMaioresDe25Anos = alunos.reduce((acumulador, aluno) => {
//   if (aluno.idade > 25) {
//     acumulador.push(aluno);
//   }

//   return acumulador;
// }, []);

// const superNome = alunos.reduce((acumulador, aluno) => {
//   acumulador+= aluno.nome[0];

//   return acumulador;
// }, '');

// console.log(superNome);

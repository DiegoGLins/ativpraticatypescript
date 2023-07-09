//Crie um programa para cadastrar, listar e excluir produtos de uma
//lista com tipagem de Produto.

interface Produto {
  descricao: string;
  categoria: string;
  valor: number;
  unidade: string;
  quantidade: number;
}

const arrayProdutos: Produto[] = [];

function cadastrarProduto(produtoParametro: Produto) {
  arrayProdutos.push(produtoParametro);
}

const shampoo: Produto = {
  descricao: "Shampoo",
  categoria: "perfumaria e higiene",
  valor: 39.9,
  unidade: "pc",
  quantidade: 1,
};

const carne: Produto = {
  descricao: "Contra File",
  categoria: "alimentos",
  valor: 152.3,
  unidade: "Kg",
  quantidade: 3.35,
};

const requeijao: Produto = {
  descricao: "Requeijao cremoso",
  categoria: "laticinios",
  valor: 7.8,
  unidade: "gr",
  quantidade: 200,
};

const manteiga: Produto = {
  descricao: "Manteiga com sal",
  categoria: "laticinios",
  valor: 29.8,
  unidade: "gr",
  quantidade: 500,
};

function listarProdutos() {
  const produtosDescricao = arrayProdutos.map((itens) => itens.descricao);
  console.log(produtosDescricao);
}

function deletarProduto(){
const excluirProduto = arrayProdutos.splice(0,2);
const produtosExcluidos = excluirProduto.map(itensDeletados=> itensDeletados.descricao);
console.log(excluirProduto);
console.log(produtosExcluidos);
console.log(arrayProdutos);
}

cadastrarProduto(shampoo);
cadastrarProduto(carne);
cadastrarProduto(requeijao);
cadastrarProduto(manteiga);
console.log(arrayProdutos);
listarProdutos();
deletarProduto();

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

import { AllUsers } from "./model/AllUsers";

export const arrayFuncionarios: AllUsers[] = [
  new AllUsers(true, "Alan Oliveira", 37, "Diretor executivo", 4),
  new AllUsers(true, "Caio Menezes Sales", 40, "Diretor comercial", 5, 22100),
  new AllUsers(
    true,
    "Monique Albuquerque Lima",
    39,
    "Diretor financeiro",
    3,
    20500
  ),
  new AllUsers(
    true,
    "Lara Pereira",
    41,
    "Diretora de desenvolvimento de software ",
    4,
    23000
  ),
  new AllUsers(true, "David Vieira", 43, "Diretor de marketing", 5, 21000),
  new AllUsers(false, "Alan Oliveira", 25, "assiste de TI", 1900),
  new AllUsers(
    false,
    "Davi Mendes Sales",
    23,
    "Tecnico de informatica",
    0,
    2100
  ),
  new AllUsers(
    false,
    "Helena Torres",
    29,
    "Devenvolvedora web junior",
    0,
    3800
  ),
  new AllUsers(
    false,
    "Patricia Magalhaes",
    31,
    "Devenvolvedora FrontEnd senior",
    0,
    6000
  ),
  new AllUsers(
    false,
    "Erick Vieira",
    33,
    "Devenvolvedor Fullstack junior",
    0,
    3000
  ),
];


let funcionariosSemCargoDeChefia = arrayFuncionarios.filter(
  (pessoa) => pessoa.diretoria === false
);

let funcionariosComCargoDeChefia = arrayFuncionarios.filter(
  (pessoa) => pessoa.diretoria === true
);


function listaTodosFuncionarios() {
  if (funcionariosSemCargoDeChefia) {
    const listaSemCargoDeChefia = funcionariosSemCargoDeChefia.map(
      (pessoa) => ({
        diretoria: pessoa.diretoria,
        nome: pessoa.nome,
        idade: pessoa.idade,
        ocupacao: pessoa.ocupacao,
        salario: pessoa.salario,
      })
    );
    console.log(listaSemCargoDeChefia);
  }
  const listaComCargoDeChafia = funcionariosComCargoDeChefia.map((pessoa) => ({
    diretoria: pessoa.diretoria,
    nome: pessoa.nome,
    idade: pessoa.idade,
    ocupacao: pessoa.ocupacao,
    nivelDeComissionamento: pessoa.nivelDeComissionamento,
    salario: pessoa.salario,
  }));
  console.log(listaComCargoDeChafia);
}


listaTodosFuncionarios();

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

import { UserBoss } from "./model/UserBoss"

const user1: UserBoss = new UserBoss (true,"Alan Oliveira", 37, "Diretor executivo", 4)
const user2: UserBoss = new UserBoss (true, "Caio Menezes Sales", 40, "Diretor comercial", 5, 22100)
const user3: UserBoss = new UserBoss (true, "Monique Albuquerque Lima",39,"Diretor financeiro", 3, 20500)
const user4: UserBoss = new UserBoss(true, "Lara Pereira", 41, "Diretor de desenvolvimento de software ",4)
const user5: UserBoss = new UserBoss (true, "David Vieira",43,"Diretor de marketing", 5)


user1.addUserBoss(user1);
user2.addUserBoss(user2);
user3.addUserBoss(user3);
user4.addUserBoss(user4);
user5.addUserBoss(user5);


console.log(user1.getShowGainBoss())
console.log(user2.getShowGainBoss())
console.log(user3.getShowGainBoss())
console.log(user4.getShowGainBoss())
console.log(user5.getShowGainBoss())

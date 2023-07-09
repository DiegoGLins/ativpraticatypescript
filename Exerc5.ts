//5 - Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

import { User } from "./model/UserModel";


const user1: User = new User (false, "Alan Oliveira", 25, "assiste de TI",1900)
const user2: User = new User (false, "Davi Mendes Sales", 23, "Tecnico de informatica", 2100)
const user3: User = new User (false, "Helena Torres",29,"Devenvolvedora web junior",3800)
const user4: User = new User(false, "Patricia Magalhaes", 31, "Devenvolvedora FrontEnd senior", 6000)
const user5: User = new User (false, "Erick Vieira",33,"Devenvolvedor Fullstack junior")

user1.addUser(user1)
user2.addUser(user2)
user3.addUser(user3)
user4.addUser(user4)
user5.addUser(user5)


console.log(user1.getShowGain())
console.log(user2.getShowGain())
console.log(user3.getShowGain())
console.log(user4.getShowGain())
console.log(user5.getShowGain())
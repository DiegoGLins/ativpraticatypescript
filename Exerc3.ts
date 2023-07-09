// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

interface Transacao {
  tipo: "entrada" | "saída";
  valor: number;
}

interface Carteira {
  saldo: number;
  transacoes: Transacao[];
}

const carteira: Carteira = {
  saldo: 0,
  transacoes: [],
};

function Deposito(valor: number): void {
  carteira.saldo += valor;

  const transacao: Transacao = { tipo: "entrada", valor };
  carteira.transacoes.push(transacao);
}

function Saque(valor: number): void {
  if (valor > carteira.saldo) {
    throw new Error("Erro: Saldo insuficiente!");
  }

  carteira.saldo -= valor;
  const transacao: Transacao = { tipo: "saída", valor };
  carteira.transacoes.push(transacao);
}

console.log("Saldo inicial:", carteira.saldo);

Deposito(1500);
console.log("Saldo após entrada:", carteira.saldo);

Saque(500);
console.log("Saldo após saída:", carteira.saldo);

try {
  Saque(100);
} catch (error: any) {
  console.log(error.message);
}

console.log("Saldo final:", carteira.saldo);
console.log("Transações:", carteira.transacoes);

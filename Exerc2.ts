// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface Avaliacao {
    nota: number;
    peso: number;
  }
  
  const notas: Avaliacao[] = [
    {
      nota: 10,
      peso: 2, //(20)
    },
    {
      nota: 5,
      peso: 1, //(5)
    },
    {
      nota: 7,
      peso: 3, //(21)
    },
  ];
  
  function mediaPonderada(avaliacao: Avaliacao[]): number {
    let media = 0;
    let nota = 0;
  
    for (let i of notas) {
      media += i.nota * i.peso; //20 + 5 + 21 = 46
      nota += i.peso; // 2 + 1 + 3 = 6
    }
  
    const mediaPonderada = media / nota; // 46 / 6
    console.log(mediaPonderada);
    return mediaPonderada;
  }
  
  const result = mediaPonderada(notas).toFixed(2);
  console.log(result);
  
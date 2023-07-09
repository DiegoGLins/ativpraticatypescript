// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6

interface Resultado {
  media: number;
  aprovado: boolean;
}

function calculaMedia(number1: number, number2: number): Resultado {
  const media: number = (number1 + number2) / 2;

  if (media >= 6) {
    return {
      media: media,
      aprovado: true,
    };
  }
  return {
    media,
    aprovado: false,
  };
}

let resultado = calculaMedia(8, 8);
console.log(resultado);


import CalculadoraService from './calculadora.service';

describe('teste da Calculadora Service', () => {
  const [calcular, concatenarNumeros, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO ] = CalculadoraService();

  

  it('deve garantir que 1 + 4 = 5.', () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3.', () => {
    let subtracao = calcular(1, 4, SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('deve garantir que 1 * 4 = 4.', () => {
    let multiplicacao = calcular(1, 4, MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });

  it('deve garantir que 4 / 2 = 2.', () => {
    let divisao = calcular(4, 2, DIVISAO);
    expect(divisao).toEqual(2);
  });

  it('deve retornar 0 para operação inválida', () => {
    let operacaoInvalida = calcular(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  });
});

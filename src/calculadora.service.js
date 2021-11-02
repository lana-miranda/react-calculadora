const CalculadoraService = () => {
  const SOMA = '+';
  const SUBTRACAO = '-';
  const MULTIPLICACAO = '*';
  const DIVISAO = '/';

  const calcular = (numero1, numero2, operacao) => {
    let resultado;
    switch (operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break;

      case SUBTRACAO:
        resultado = numero1 - numero2;
        break;

      case MULTIPLICACAO:
        resultado = numero1 * numero2;
        break;

      case DIVISAO:
        resultado = numero1 / numero2;
        break;

      default:
        resultado = 0;
    }
    return resultado;
  };

  const concatenarNumeros = (numeroAtual, numeroConcat) => {
    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }
    if (numeroConcat === '.' && numeroAtual === '') {
      return '0.';
    }
    if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }
    return numeroAtual + numeroConcat;
  };

  return [calcular, concatenarNumeros, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
};

export default CalculadoraService;

import { render, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';

describe('Calculadora', () => {
  it('deve limpar o campo de números', () => {
    const { getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('deve fazer a soma de 2 + 3 e obter o resultado 5', () => {
    const { getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  });

  it('deve fazer a subtração de 5 - 3 e obter o resultado 2', () => {
    const { getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  });

  it('deve fazer a multiplicação de 5 * 2 e obter o resultado 10', () => {
    const { getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('10');
  });

  it('deve fazer a divisão de 6 / 2 e obter o resultado 5', () => {
    const { getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3');
  });

  it('deve somar 2.5 + 3 e obter o resultado 5.5', () => {
    const { getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  });

})


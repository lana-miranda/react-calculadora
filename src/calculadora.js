import { useState } from 'react';
import './calculadora.css';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculadoraService from './calculadora.service';
import Header from './components/header/header';

const Calculadora = () => {
  const [calcular, concatenarNumeros, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] =
    CalculadoraService();
  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  const adicionarNumeros = (numero) => {
    let resultado;

    if (operacao === null) {
      resultado = concatenarNumeros(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = concatenarNumeros(numero2, numero);
      setNumero2(resultado);
    }

    console.log(resultado, numero);
    setTxtNumeros(resultado);
  };

  const definirOperacao = (op) => {
    if (operacao === null) {
      setOperacao(op);
      return;
    }

    if (numero2 !== null) {
      const resultado = calcular(
        parseFloat(numero1),
        parseFloat(numero2),
        operacao
      );
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  };

  const acaoCalcular = () => {
    if (numero2 === null) {
      return;
    }
    const resultado = calcular(
      parseFloat(numero1),
      parseFloat(numero2),
      operacao
    );
    setTxtNumeros(resultado);
  };

  const limpar = () => {
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  };

  return (
    <>
      <Header></Header>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          border="primary"
          style={{
            width: '500px',
            background: 'transparent !important',
            backgroundColor: '#9AECDB',
            padding: '20px',
            marginTop: '50px',
          }}
        >
          <Container>
            <Row>
              <Col xs="3">
                <Button variant="danger" onClick={limpar}>
                  C
                </Button>
              </Col>
              <Col xs="9">
                <Form.Control
                  type="text"
                  name="txtNumeros"
                  className="text-right"
                  readyonly="true"
                  value={txtNumeros}
                  onChange={setTxtNumeros}
                  data-testid="txtNumeros"
                ></Form.Control>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('7')}>
                  7
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('8')}>
                  8
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('9')}>
                  9
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => definirOperacao(DIVISAO)}
                >
                  /
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('4')}>
                  4
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('5')}>
                  5
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('6')}>
                  6
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => definirOperacao(MULTIPLICACAO)}
                >
                  *
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('1')}>
                  1
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('2')}>
                  2
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('3')}>
                  3
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => definirOperacao(SUBTRACAO)}
                >
                  -
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('0')}>
                  0
                </Button>
              </Col>
              <Col>
                <Button variant="light" onClick={() => adicionarNumeros('.')}>
                  .
                </Button>
              </Col>
              <Col>
                <Button variant="success" onClick={acaoCalcular}>
                  =
                </Button>
              </Col>
              <Col>
                <Button variant="primary" onClick={() => definirOperacao(SOMA)}>
                  +
                </Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default Calculadora;

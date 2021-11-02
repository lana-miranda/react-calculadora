import { Card } from 'react-bootstrap';

const Header = () => {
  return (
    <Card
      style={{
        background: 'transparent !important',
        backgroundColor: '#58B19F',
        textAlign: 'center',
        color: 'white',
        fontSize: '25px',
        textTransform: 'uppercase',
      }}
    >
      <Card.Header>Calculadora com React</Card.Header>
    </Card>
  );
};

export default Header;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.imagen} />
    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Card.Title>{product.titulo}</Card.Title>
      <Card.Text>{product.descripcion}</Card.Text>
      <Card.Text>{product.categoria}</Card.Text>
      {product.precio && <Card.Text>${product.precio}</Card.Text>}
      {product.stock && <Card.Text>Stock: {product.stock}</Card.Text>}
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">Conocé Más!</Button>
      </Link>
    </Card.Body>
  </Card>
);


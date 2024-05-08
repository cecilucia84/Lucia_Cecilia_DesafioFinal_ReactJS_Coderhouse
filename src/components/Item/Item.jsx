import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import styles from './Item.module.css';

export const Item = ({ id, titulo, imagen, precio, stock, descripcion, categoria }) => {
  console.log(stock);
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={imagen} className={styles.image} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>{titulo}</Card.Title>
        <Card.Text className={styles.description}>{descripcion}</Card.Text>
        <Card.Text className={styles.category}>{categoria}</Card.Text>
        {precio && <Card.Text className={styles.price}>${precio}</Card.Text>}
        {stock && <Card.Text className={styles.stock}>Stock: {stock}</Card.Text>}
        <Link to={`/item/${id}`} className={styles.link}>
          <Button variant="primary">Conocé Más!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

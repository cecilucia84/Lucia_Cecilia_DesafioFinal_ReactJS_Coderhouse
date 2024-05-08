import { useState } from 'react';
import Container from "react-bootstrap/Container";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import styles from './ItemDetail.module.css';

export const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const [currentStock, setCurrentStock] = useState(stock);
    const { addItem, getProductQuantity, cart } = useCart();

    const handleOnAdd = (quantity) => {
        const objProduct = { id, name, img, price, quantity };
        addItem(objProduct);
        setCurrentStock(currentStock - quantity);
    };

    console.log('Detail: ', cart);
    const productQuantity = getProductQuantity(id);

    return (
        <Container className={styles['item-detail-container']}>
            <h1 className={styles['item-detail-title']}>{name}</h1>
            <img src={img}
                className={styles['item-detail-image']}
                alt={name}
            />
            <p className={styles['item-detail-description']}>{description}</p>
            <div className={styles['item-detail-stock']}>{`Stock ${currentStock}`}</div>
            <div className={styles['item-detail-price']}>{`Precio ${price}`}</div>
            <ItemCount stock={currentStock} onAdd={handleOnAdd} initial={productQuantity} />
        </Container>
    );
};

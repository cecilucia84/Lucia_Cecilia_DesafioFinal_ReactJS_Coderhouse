import { useState } from 'react';
import Container from "react-bootstrap/Container";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const [currentStock, setCurrentStock] = useState(stock);
    const { addItem, getProductQuantity, cart } = useCart()

    const handleOnAdd = (quantity) => {
        const objProduct = { id, name, img, price, quantity };
        addItem(objProduct);
        setCurrentStock(currentStock - quantity);
    }

    console.log('Detail: ', cart);
    const productQuantity = getProductQuantity(id);

    return (
        <Container className="mt-5">
            <h1>{name}</h1>
            <img src={img}
                style={{ height: 450, width: 'auto' }}
                alt={name}
            />
            <p>{description}</p>
            <div>{`Stock ${currentStock}`}</div>
            <div>{`Precio ${price}`}</div>
            <ItemCount stock={currentStock} onAdd={handleOnAdd} initial={productQuantity} />
        </Container>
    );
};

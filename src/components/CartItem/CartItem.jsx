import { useCart } from '../../context/CartContext';
import { FaTrashCan } from 'react-icons/fa6';
import classes from './CartItem.module.css';

const CartItem = ({ img, name, price, quantity, id }) => {
    const { removeItem } = useCart();

    return (
        <div className={classes.container}>
            <img className={classes.img} src={img} alt={`Imagen de ${name}`} />
            <div className={classes.info}>
                <h5 className={classes.name}>{name}</h5>
                <p className={classes.price}>
                    <strong>Precio Unitario: </strong>$ {price}
                </p>
                <p className={classes.quantity}>
                    <strong>Cantidad de Unidades: </strong>
                    {quantity}
                </p>
                <p className={classes.subtotal}>
                    <strong>Subtotal: </strong>$ {price * quantity}
                </p>
            </div>
            <button onClick={() => removeItem(id)}>
                <FaTrashCan className={classes.icon} />
            </button>
        </div>
    );
};

export default CartItem;

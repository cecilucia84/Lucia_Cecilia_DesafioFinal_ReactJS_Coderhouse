import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import cart from "../../assets/carrito.png";
import styles from './CartWidget.module.css';

export const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className={styles.cart}> 
      <img src={cart} alt="Cart" />
      <span>{totalQuantity}</span>
    </Link>
  );
};

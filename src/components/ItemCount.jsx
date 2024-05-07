import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from './ItemCount.module.css'

export const ItemCount = ({ initial = 1, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <div className={styles['d-flex']}>
      <div className={styles.buttonContainer}>
        <button className="button" onClick={decrement}><FaMinus /></button>
        <p className={styles.number}>{quantity}</p> 
        <button className="button" onClick={increment}><FaPlus /></button>
        <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
      </div>
    </div>
);
}

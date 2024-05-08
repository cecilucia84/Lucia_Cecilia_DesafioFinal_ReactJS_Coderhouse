
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hooks/useAsync';

import styles from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const asyncFunction = () => getProductById(id);
  const { data: product, error, loading } = useAsync(asyncFunction, [id]);

  if (loading) {
    return <h2 className={styles.loading}>Cargando...</h2>;
  }

  return (
    <section className={styles.container}> 
      <div className={styles.itemDetailContainer}>
        <ItemDetail {...product} />
      </div>
    </section>
  );
}

export default ItemDetailContainer;

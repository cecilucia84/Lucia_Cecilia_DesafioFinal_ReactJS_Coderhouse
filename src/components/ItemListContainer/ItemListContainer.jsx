import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import styles from './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products'); 

    getDocs(productsCollection).then((querySnapshot) => {
      let productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (categoryId) {
        productsData = productsData.filter(
          (product) => product.categoria === categoryId
        );
      }
     
      productsData.sort((a, b) => a.categoria.localeCompare(b.categoria));
      setProducts(productsData);
    });
  }, [categoryId]);

  if (!products.length) return <div className={styles.loading}>Cargando...</div>;

  return (
    <section className={styles.container}>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer;

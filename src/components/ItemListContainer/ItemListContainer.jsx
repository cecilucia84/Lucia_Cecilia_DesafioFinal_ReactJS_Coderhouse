import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import ItemList from "../ItemList/ItemList"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()

  const asyncFunction = () => getProducts(categoryId)
  const { data: products, error, loading } = useAsync(asyncFunction, [categoryId])

  if (loading) {
    return <h2>Cargando...</h2>
  }

  if (error) {
    showNotification('error', 'Hubo un error')
  }

  // Ordena los productos por categoría
  const sortedProducts = [...products].sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  });

  return (
    <section className="container">
      <h2>{greeting}</h2>
      <ItemList products={sortedProducts} />
    </section>
  )
}

export default ItemListContainer;

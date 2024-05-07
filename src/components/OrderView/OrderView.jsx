import Button from '../Button/Button';
import OrderViewBuyer from '../OrderViewBuyer/OrderViewBuyer';
import OrderViewItem from '../OrderViewItem/OrderViewItem';
import classes from './OrderView.module.css';
import { orderData } from '../../services/firebase/firestore/order';
import { useAsync } from '../../hooks/useAsync';

const OrderView = ({ orderSnapshot }) => {
    const asyncFunction = () => orderData(orderSnapshot);
    const { data, loading, error } = useAsync(asyncFunction, [orderSnapshot]);

    if (loading) {
        return <h2>Solo un momento más...</h2>;
    }

    if (error) {
        return <p className={classes.notification}>Error al generar la orden</p>;
    }

    return (
        <div className="container">
            <div className={classes.container}>
                <h2>¡Gracias por comprar con nosotros!</h2>
                <p className={classes.order}>
                    el ID de su compra es: <strong>{data.id}</strong>
                </p>
                <div className={classes.orderData}>
                    <OrderViewBuyer buyer={data.buyer} />
                    <OrderViewItem item={data.item} />
                </div>
                <p className={classes.total}>Total de la compra: $ {data.total}</p>
                <p className={classes.contact}>Pronto nos pondremos en contacto con usted</p>
                <Button className={classes.button} to={'/'}>
                    Volver al inicio
                </Button>
            </div>
        </div>
    );
};

export default OrderView;

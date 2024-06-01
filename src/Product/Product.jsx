import styles from "./Product.module.css";
import PropTypes from "prop-types";


const Product = ({title, price, qty, image, id, removeProduct, loadEditProd}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h3>Price: {price}</h3>
            <h3>Available Qty: {qty}</h3>
            <button onClick={() => removeProduct(id)} className={styles["delete"]}>delete</button>
            <button onClick={() => loadEditProd(id)} className={styles["edit"]}>edit</button>
        </div>
    );
};

Product.propTypes = {
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    qty:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    removeProduct: PropTypes.func,
    loadEditProd: PropTypes.func,
};

export default Product;
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const CartWidget = () => {
  const { countProducts } = useCartContext();
  let count = countProducts();
  
  return (
    <>
        <Link to="/cart" className="btn my-2 my-sm-0 text-light position-relative">
          <i className="bi bi-cart2 fs-2 "></i>
          <span className="position-absolute start-500 translate-middle p-1 rounded-pill bg-danger" style={{
                fontSize: '0.75em',
                minWidth: '2em',
                top: '10px !important',
                fontWeight: 'bold'
            }}>
            {count}
            <span className="visually-hidden">Itesm in cart</span>
          </span>
        </Link>
    </>
  );
}

export default CartWidget;

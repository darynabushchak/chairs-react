import Header from "../../common/Header";
import styles from "../Cart/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../../redux/chairs_in_cart";

function Cart() {
  const dispatch = useDispatch();
  const { chairs } = useSelector((state) => state.chairsInCart);

  const handleRemoveFromCart = (chairId) => {
    dispatch(removeFromCart(chairId));
  };
  const handleQuantityChange = (chairId, change) => {
    dispatch(updateQuantity({ chairId, change }));
  };
  
  const handleAddToCart = (chair, count = 1) => {
    dispatch(addToCart({ ...chair, count }));
  };
  
  const calculateTotalAmount = () => {
    return chairs.reduce((total, chair) => {
      const item = cartItems.find((cartItem) => cartItem.id === chair.id);
      return total + chair.price * (item ? item.quantity : 0);
    }, 0);
  };
  
  const handleIncrement = (chairId) => {
    handleQuantityChange(chairId, 1);
  };
  
  const handleDecrement = (chairId) => {
    const item = cartItems.find((cartItem) => cartItem.id === chairId);
    if (item && item.quantity > 0) {
      handleQuantityChange(chairId, -1);
    }
  };
  
  const cartItems = chairs.reduce((items, chair) => {
    const existingItem = items.find((item) => item.id === chair.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...chair, quantity: 1 });
    }
    return items;
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className={styles.cart}>
        <Header
          link={styles.link}
          homeButton={styles.homeButton}
          catalogButton={styles.catalogButton}
          cartButton={styles.cartButton}
          className={styles.header}
        />
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className={styles.chairBlockCart}> 
                    <span>{item.title}</span>
                    <span className={styles.priceName}>Price: ${item.price}</span>
                    <span className={styles.quantityName}>
                      Quantity:{" "}
                      <div className={styles.quantityControl}>
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </span>
                    <button className={styles.removeButton}  onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p>Total amount: ${totalAmount.toFixed(2)}</p>
            <button className={styles.backToCatalogButton}>Back to Catalog</button>
            <button className={styles.continueButton}>Continue</button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;

import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../Slices/Cart.Slice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function CartComponent(){
  const { productId } = useParams();
    const cart = useSelector((state) => state.cartInfo.cartValues);
  const totalPrice = useSelector((state) => state.cartInfo.totalPrice);
  const dispatch = useDispatch();
  useEffect(()=> {
    let scriptTag = document.createElement("script")
    scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js"
    scriptTag.async = true
    document.body.appendChild(scriptTag)
    
    return () =>{
      document.body.removeChild(scriptTag);
    }
    
    },[productId]);
  return (
    <div className="container mt-5">
      <h2 className="fontShop">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cartempty">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="mb-3 my-4">
              <img
                src={`data:image/jpeg;base64,${item.imgSrc}`}
                alt={item.name}
                style={{ width: "120px", marginRight: "10px" }}
              />
              {item.name} - ₹{item.price} - Quantity: {item.quantity}
              <button
                className="btn btn-light mx-2"
                onClick={() => dispatch(incrementQuantity({ id: item.id }))}
              >
                +
              </button>
              <button
                className="btn btn-light mx-2"
                onClick={() => dispatch(decrementQuantity({ id: item.id }))}
              >
                -
              </button>
              <button
                className="btn btn-dark"
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
              >
                Remove
              </button>
            </div>
          ))}
          <p className="totalprice">Total Price: ₹{totalPrice}</p>
          <Link to="/checkout" state={{ cart, totalPrice }}>
            <button className="btn btn-dark my-5">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default CartComponent;
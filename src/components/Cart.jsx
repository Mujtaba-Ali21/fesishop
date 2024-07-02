import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const deliveryCharges = 280;

  useEffect(() => {
    const productData = localStorage.getItem("cartItems");
    if (productData !== null) {
      try {
        const parsedData = JSON.parse(productData);
        setCartItems(parsedData);
      } catch (error) {
        console.error("Error parsing cart items:", error);
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () => {
    return (
      cartItems.reduce(
        (total, item) => total + item.productPrice * item.quantity,
        0
      ) + deliveryCharges
    );
  };

  const constructWhatsAppMessage = () => {
    let message =
      "Hello, I am interested in buying these products from your webstore Fesi Shop:\n";
    cartItems.forEach((item) => {
      message += `\nProduct: ${item.productTitle}\nID: ${item.id}\nQuantity: ${
        item.quantity
      }\nPrice: ${item.productPrice} PKR\nSubtotal: ${
        item.productPrice * item.quantity
      } PKR\n`;
    });
    message += `\nDelivery Charges: ${deliveryCharges} PKR\nTotal: ${calculateTotal()} PKR`;
    return message;
  };

  const handleProceedToPayment = () => {
    const phoneNumber = "3152369281";
    const message = constructWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B92${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <NavBar />
      <div className="goBackBtn ms-5 mt-2" role="button" onClick={handleGoBack}>
        <i className="bi bi-arrow-left-short fs-3">Go Back</i>
      </div>

      <div className="cartContainer container">
        <h1 className="text-center my-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <h1 className="text-center text-light my-5">Your cart is empty</h1>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div key={item.id} className="cartItem row mb-4 p-3">
                  <div className="col-md-3">
                    <img
                      src={item.productImage}
                      alt={item.productTitle}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                      <h4>{item.productTitle}</h4>
                      <i
                        className="bi bi-x-lg"
                        role="button"
                        onClick={() => {
                          handleRemoveItem(item.id);
                        }}
                      ></i>
                    </div>
                    <p>
                      Price:{" "}
                      <span className="text-dark">{item.productPrice} PKR</span>
                    </p>
                    <div className="quantity-container">
                      <button
                        className="quantity-button"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <input type="text" value={item.quantity} readOnly />
                      <button
                        className="quantity-button"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <p>
                      Subtotal:{" "}
                      <span className="text-dark">
                        {item.productPrice * item.quantity} PKR
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="card p-3">
                <h4 className="text-center">Subtotal</h4>
                <div className="order-summary">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between"
                    >
                      <p>
                        {item.productTitle}
                        {item.quantity > 1 && (
                          <sup className="text-dark">{item.quantity}x</sup>
                        )}
                      </p>

                      <p>PKR {item.productPrice * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Delivery</p>
                  <p>280 PKR</p>
                </div>
                <h4 className="text-center mt-3">
                  Total: {calculateTotal()} PKR
                </h4>
                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={handleProceedToPayment}
                >
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;

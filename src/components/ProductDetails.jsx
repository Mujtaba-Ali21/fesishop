import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/productDetails.css";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product data available</div>;
  }

  const handleGoBack = () => {
    window.history.back();
  };

const handleAddToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const itemIndex = cartItems.findIndex((item) => item.id === product.id);

  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`Added ${product.productTitle} to your cart!`);
};


  const handleProceedToPayment = () => {
    const phoneNumber = "3152369281";
    const message = `Hello, I am interested in buying this product from your webstore Fesi Shop: \nName: ${product.productTitle} \nPrice: ${product.productPrice} \nID: ${product.id}`;
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
      <div className="product-details-container my-5">
        <div className="product-image-container me-3">
          <img
            src={product.productImage}
            alt={product.productTitle}
            className="product-image"
          />
        </div>
        <div className="product-info-container">
          {!product.inStock && (
            <h6 className="product-price text-end">Sold Out</h6>
          )}
          <h1 className="product-name">{product.productTitle}</h1>
          <p className="product-price">Price: {product.productPrice} PKR</p>
          <p className="product-description">
            Description: {product.productDescription}
          </p>
          <button
            className="add-to-cart-button"
            disabled={!product.inStock}
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add To Cart <i className="bi bi-cart-plus ms-2"></i>
          </button>

          <button
            className="add-to-cart-button mt-3"
            onClick={handleProceedToPayment}
            disabled={!product.inStock}
          >
              Buy It Now <i className="bi bi-cart-check ms-2"></i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;

import React from "react";

import whatsapp from "../assets/whatsapp.webp";
import "../styles/app.css";

function Contact() {
  const handleContact = () => {
    const phoneNumber = "3154725501";
    const message = `Hello! This is a message from FesiShop. \n\nI need Help with: `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B92${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-container" onClick={handleContact}>
      <h5 className="chat-text">Chat With Us</h5>
      <img src={whatsapp} alt="WhatsApp Icon" />
    </div>
  );
}

export default Contact;
